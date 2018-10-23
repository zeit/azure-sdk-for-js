/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const clusterName: msRest.OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    required: true,
    serializedName: "clusterName",
    constraints: {
      MaxLength: 64,
      MinLength: 1,
      Pattern: /^[-\w_]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const directory: msRest.OperationQueryParameter = {
  parameterPath: [
    "jobsListOutputFilesOptions",
    "directory"
  ],
  mapper: {
    serializedName: "directory",
    defaultValue: '.',
    type: {
      name: "String"
    }
  }
};
export const experimentName: msRest.OperationURLParameter = {
  parameterPath: "experimentName",
  mapper: {
    required: true,
    serializedName: "experimentName",
    constraints: {
      MaxLength: 64,
      MinLength: 1,
      Pattern: /^[-\w_]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const fileServerName: msRest.OperationURLParameter = {
  parameterPath: "fileServerName",
  mapper: {
    required: true,
    serializedName: "fileServerName",
    constraints: {
      MaxLength: 64,
      MinLength: 1,
      Pattern: /^[-\w_]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const jobName: msRest.OperationURLParameter = {
  parameterPath: "jobName",
  mapper: {
    required: true,
    serializedName: "jobName",
    constraints: {
      MaxLength: 64,
      MinLength: 1,
      Pattern: /^[-\w_]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const linkexpiryinminutes: msRest.OperationQueryParameter = {
  parameterPath: [
    "jobsListOutputFilesOptions",
    "linkexpiryinminutes"
  ],
  mapper: {
    serializedName: "linkexpiryinminutes",
    defaultValue: 60,
    constraints: {
      InclusiveMaximum: 600,
      InclusiveMinimum: 5
    },
    type: {
      name: "Number"
    }
  }
};
export const location: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    constraints: {
      Pattern: /^[-\w\._]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const maxResults0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "workspacesListOptions",
    "maxResults"
  ],
  mapper: {
    serializedName: "maxresults",
    defaultValue: 1000,
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const maxResults1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "workspacesListByResourceGroupOptions",
    "maxResults"
  ],
  mapper: {
    serializedName: "maxresults",
    defaultValue: 1000,
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const maxResults2: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "experimentsListByWorkspaceOptions",
    "maxResults"
  ],
  mapper: {
    serializedName: "maxresults",
    defaultValue: 1000,
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const maxResults3: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "jobsListByExperimentOptions",
    "maxResults"
  ],
  mapper: {
    serializedName: "maxresults",
    defaultValue: 1000,
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const maxResults4: msRest.OperationQueryParameter = {
  parameterPath: [
    "jobsListOutputFilesOptions",
    "maxResults"
  ],
  mapper: {
    serializedName: "maxresults",
    defaultValue: 1000,
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const maxResults5: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "fileServersListByWorkspaceOptions",
    "maxResults"
  ],
  mapper: {
    serializedName: "maxresults",
    defaultValue: 1000,
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const maxResults6: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "clustersListByWorkspaceOptions",
    "maxResults"
  ],
  mapper: {
    serializedName: "maxresults",
    defaultValue: 1000,
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const outputdirectoryid: msRest.OperationQueryParameter = {
  parameterPath: [
    "jobsListOutputFilesOptions",
    "outputdirectoryid"
  ],
  mapper: {
    required: true,
    serializedName: "outputdirectoryid",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      Pattern: /^[-\w\._]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const workspaceName: msRest.OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    required: true,
    serializedName: "workspaceName",
    constraints: {
      MaxLength: 64,
      MinLength: 1,
      Pattern: /^[-\w_]+$/
    },
    type: {
      name: "String"
    }
  }
};