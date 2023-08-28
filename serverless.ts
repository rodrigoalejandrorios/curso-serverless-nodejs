import type { AWS } from "@serverless/typescript";

import { findAll, findById } from "@functions/index";

const serverlessConfiguration: AWS = {
  service: "sls-nodejs-ts",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      STAGE : '${self:custom.stage}',
      DB_HOST: 'localhost',
      DB_PORT: '5436',
      DB_USER: 'uslscodrr',
      DB_PASSWORD: 'secret1234',
      DB_SCHEMA: 'codrrslsdb'
    },
  },
  // import the function via paths
  functions: { findAll, findById },
  package: { individually: true },
  custom: {
    stage: '${opt:stage, "local"}',
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
