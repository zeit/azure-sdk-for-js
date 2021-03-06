/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const appId: msRest.OperationURLParameter = {
  parameterPath: "appId",
  mapper: {
    required: true,
    serializedName: "appId",
    type: {
      name: "Uuid"
    }
  }
};
export const endpoint: msRest.OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    required: true,
    serializedName: "Endpoint",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const log: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "log"
  ],
  mapper: {
    serializedName: "log",
    type: {
      name: "Boolean"
    }
  }
};
export const showAllIntents: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "showAllIntents"
  ],
  mapper: {
    serializedName: "show-all-intents",
    type: {
      name: "Boolean"
    }
  }
};
export const slotName: msRest.OperationURLParameter = {
  parameterPath: "slotName",
  mapper: {
    required: true,
    serializedName: "slotName",
    type: {
      name: "String"
    }
  }
};
export const verbose: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "verbose"
  ],
  mapper: {
    serializedName: "verbose",
    type: {
      name: "Boolean"
    }
  }
};
export const versionId: msRest.OperationURLParameter = {
  parameterPath: "versionId",
  mapper: {
    required: true,
    serializedName: "versionId",
    type: {
      name: "String"
    }
  }
};
