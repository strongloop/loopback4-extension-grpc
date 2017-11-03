// Copyright IBM Corp. 2017. All Rights Reserved.
// Node module: loopback4-extension-starter
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
export interface GrpcConfig {
  host?: string;
  port?: number;
  proto: string;
  package: string;
  sequence?: any;
}
