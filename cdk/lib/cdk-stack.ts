import * as cdk from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deployment from "aws-cdk-lib/aws-s3-deployment";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // lambda関数を定義
    const nuxtBlogFunction = new lambda.NodejsFunction(this, "nuxtBlogFunction", {
      entry: "../.output/server/index.mjs",
      handler: "index.handler",
      runtime: Runtime.NODEJS_18_X,
    });

    const nuxtBlogApi = new apigw.LambdaRestApi(this, "nuxtBlogApi", {
      handler: nuxtBlogFunction,
    });

    // S3とCloudFront Distributionを作成
    const bucket = new s3.Bucket(this, "Bucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const cfOriginAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "cfOriginAccessIdentity",
      {}
    );
    const cloudfrontS3Access = new iam.PolicyStatement();
    cloudfrontS3Access.addActions("s3:GetBucket*");
    cloudfrontS3Access.addActions("s3:GetObject*");
    cloudfrontS3Access.addActions("s3:List*");
    cloudfrontS3Access.addResources(bucket.bucketArn);
    cloudfrontS3Access.addResources(`${bucket.bucketArn}/*`);
    cloudfrontS3Access.addCanonicalUserPrincipal(
      cfOriginAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId
    );
    bucket.addToResourcePolicy(cloudfrontS3Access);

    //const s3Origin = new origins.S3Origin(bucket);
    // CloudFrontを設定
    const distribution = new cloudfront.CloudFrontWebDistribution(this, "nuxtBlogDistribution", {
      defaultRootObject: "",
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
            originAccessIdentity: cfOriginAccessIdentity,
          },
          behaviors: [
            {
              allowedMethods: cloudfront.CloudFrontAllowedMethods.GET_HEAD,
              pathPattern: "_nuxt/*",
            }
          ],
        },
        {
          customOriginSource: {
            domainName: `${nuxtBlogApi.restApiId}.execute-api.${this.region}.${this.urlSuffix}`,
            originPath: `/${nuxtBlogApi.deploymentStage.stageName}`
          },
          behaviors: [
            {
              allowedMethods: cloudfront.CloudFrontAllowedMethods.ALL,
              isDefaultBehavior: true,
            }
          ],
        },
      ],
    });

    // S3へ静的コンテンツをデプロイ
    new s3deployment.BucketDeployment(this, "Deployment", {
      sources: [s3deployment.Source.asset("../.output/public")],
      destinationBucket: bucket,
      distribution,
    });

    // アクセスできるCloudFrontのURLを出力
    new cdk.CfnOutput(this, "URL", {
      value: `https://${distribution.distributionDomainName}`,
    });
  }
}
