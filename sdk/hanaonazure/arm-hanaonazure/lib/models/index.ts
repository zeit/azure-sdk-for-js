/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing Resource.
 * The resource model definition.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource ID
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [location] Resource location
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly location?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing HardwareProfile.
 * Specifies the hardware settings for the HANA instance.
 *
 */
export interface HardwareProfile {
  /**
   * @member {HanaHardwareTypeNamesEnum} [hardwareType] Name of the hardware
   * type (vendor and/or their product name). Possible values include:
   * 'Cisco_UCS', 'HPE'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly hardwareType?: HanaHardwareTypeNamesEnum;
  /**
   * @member {HanaInstanceSizeNamesEnum} [hanaInstanceSize] Specifies the HANA
   * instance SKU. Possible values include: 'S72m', 'S144m', 'S72', 'S144',
   * 'S192', 'S192m', 'S192xm', 'S96', 'S384', 'S384m', 'S384xm', 'S384xxm',
   * 'S576m', 'S576xm', 'S768', 'S768m', 'S768xm', 'S960m'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly hanaInstanceSize?: HanaInstanceSizeNamesEnum;
}

/**
 * @interface
 * An interface representing Disk.
 * Specifies the disk information fo the HANA instance
 *
 */
export interface Disk {
  /**
   * @member {string} [name] The disk name.
   */
  name?: string;
  /**
   * @member {number} [diskSizeGB] Specifies the size of an empty data disk in
   * gigabytes.
   */
  diskSizeGB?: number;
  /**
   * @member {number} [lun] Specifies the logical unit number of the data disk.
   * This value is used to identify data disks within the VM and therefore must
   * be unique for each data disk attached to a VM.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly lun?: number;
}

/**
 * @interface
 * An interface representing StorageProfile.
 * Specifies the storage settings for the HANA instance disks.
 *
 */
export interface StorageProfile {
  /**
   * @member {string} [nfsIpAddress] IP Address to connect to storage.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nfsIpAddress?: string;
  /**
   * @member {Disk[]} [osDisks] Specifies information about the operating
   * system disk used by the hana instance.
   */
  osDisks?: Disk[];
}

/**
 * @interface
 * An interface representing OSProfile.
 * Specifies the operating system settings for the HANA instance.
 *
 */
export interface OSProfile {
  /**
   * @member {string} [computerName] Specifies the host OS name of the HANA
   * instance.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly computerName?: string;
  /**
   * @member {string} [osType] This property allows you to specify the type of
   * the OS.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly osType?: string;
  /**
   * @member {string} [version] Specifies version of operating system.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly version?: string;
}

/**
 * @interface
 * An interface representing IpAddress.
 * Specifies the IP address of the network interface.
 *
 */
export interface IpAddress {
  /**
   * @member {string} [ipAddress] Specifies the IP address of the network
   * interface.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly ipAddress?: string;
}

/**
 * @interface
 * An interface representing NetworkProfile.
 * Specifies the network settings for the HANA instance disks.
 *
 */
export interface NetworkProfile {
  /**
   * @member {IpAddress[]} [networkInterfaces] Specifies the network interfaces
   * for the HANA instance.
   */
  networkInterfaces?: IpAddress[];
  /**
   * @member {string} [circuitId] Specifies the circuit id for connecting to
   * express route.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly circuitId?: string;
}

/**
 * @interface
 * An interface representing HanaInstance.
 * HANA instance info on Azure (ARM properties and HANA properties)
 *
 * @extends Resource
 */
export interface HanaInstance extends Resource {
  /**
   * @member {HardwareProfile} [hardwareProfile] Specifies the hardware
   * settings for the HANA instance.
   */
  hardwareProfile?: HardwareProfile;
  /**
   * @member {StorageProfile} [storageProfile] Specifies the storage settings
   * for the HANA instance disks.
   */
  storageProfile?: StorageProfile;
  /**
   * @member {OSProfile} [osProfile] Specifies the operating system settings
   * for the HANA instance.
   */
  osProfile?: OSProfile;
  /**
   * @member {NetworkProfile} [networkProfile] Specifies the network settings
   * for the HANA instance.
   */
  networkProfile?: NetworkProfile;
  /**
   * @member {string} [hanaInstanceId] Specifies the HANA instance unique ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly hanaInstanceId?: string;
  /**
   * @member {HanaInstancePowerStateEnum} [powerState] Resource power state.
   * Possible values include: 'starting', 'started', 'stopping', 'stopped',
   * 'restarting', 'unknown'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly powerState?: HanaInstancePowerStateEnum;
  /**
   * @member {string} [proximityPlacementGroup] Resource proximity placement
   * group
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly proximityPlacementGroup?: string;
  /**
   * @member {string} [hwRevision] Hardware revision of a HANA instance
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly hwRevision?: string;
}

/**
 * @interface
 * An interface representing Display.
 * Detailed HANA operation information
 *
 */
export interface Display {
  /**
   * @member {string} [provider] The localized friendly form of the resource
   * provider name. This form is also expected to include the publisher/company
   * responsible. Use Title Casing. Begin with "Microsoft" for 1st party
   * services.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: string;
  /**
   * @member {string} [resource] The localized friendly form of the resource
   * type related to this action/operation. This form should match the public
   * documentation for the resource provider. Use Title Casing. For examples,
   * refer to the “name” section.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resource?: string;
  /**
   * @member {string} [operation] The localized friendly name for the operation
   * as shown to the user. This name should be concise (to fit in drop downs),
   * but clear (self-documenting). Use Title Casing and include the
   * entity/resource to which it applies.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operation?: string;
  /**
   * @member {string} [description] The localized friendly description for the
   * operation as shown to the user. This description should be thorough, yet
   * concise. It will be used in tool-tips and detailed views.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly description?: string;
  /**
   * @member {string} [origin] The intended executor of the operation; governs
   * the display of the operation in the RBAC UX and the audit logs UX. Default
   * value is 'user,system'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly origin?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * HANA operation information
 *
 */
export interface Operation {
  /**
   * @member {string} [name] The name of the operation being performed on this
   * particular object. This name should match the action name that appears in
   * RBAC / the event service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {Display} [display] Displayed HANA operation information
   */
  display?: Display;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Describes the format of Error response.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} [code] Error code
   */
  code?: string;
  /**
   * @member {string} [message] Error message indicating why the operation
   * failed.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing Tags.
 * Tags field of the HANA instance.
 *
 */
export interface Tags {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Tags field of the HANA
   * instance.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing MonitoringDetails.
 * Details needed to monitor a Hana Instance
 *
 */
export interface MonitoringDetails {
  /**
   * @member {string} [hanaVnet] ARM ID of an Azure Vnet with access to the
   * HANA instance.
   */
  hanaVnet?: string;
  /**
   * @member {string} [hanaHostname] Hostname of the HANA Instance blade.
   */
  hanaHostname?: string;
  /**
   * @member {string} [hanaInstanceNum] A number between 00 and 99, stored as a
   * string to maintain leading zero.
   */
  hanaInstanceNum?: string;
  /**
   * @member {HanaDatabaseContainersEnum} [dbContainer] Either single or
   * multiple depending on the use of MDC(Multiple Database Containers).
   * Possible values include: 'single', 'multiple'. Default value: 'single' .
   */
  dbContainer?: HanaDatabaseContainersEnum;
  /**
   * @member {string} [hanaDatabase] Name of the database itself.  It only
   * needs to be specified if using MDC
   */
  hanaDatabase?: string;
  /**
   * @member {string} [hanaDbUsername] Username for the HANA database to login
   * to for monitoring
   */
  hanaDbUsername?: string;
  /**
   * @member {string} [hanaDbPassword] Password for the HANA database to login
   * for monitoring
   */
  hanaDbPassword?: string;
}

/**
 * @interface
 * An interface representing HanaManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface HanaManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationList.
 * List of HANA operations
 *
 * @extends Array<Operation>
 */
export interface OperationList extends Array<Operation> {
}

/**
 * @interface
 * An interface representing the HanaInstancesListResult.
 * The response from the List HANA Instances operation.
 *
 * @extends Array<HanaInstance>
 */
export interface HanaInstancesListResult extends Array<HanaInstance> {
  /**
   * @member {string} [nextLink] The URL to get the next set of HANA instances.
   */
  nextLink?: string;
}

/**
 * Defines values for HanaHardwareTypeNamesEnum.
 * Possible values include: 'Cisco_UCS', 'HPE'
 * @readonly
 * @enum {string}
 */
export type HanaHardwareTypeNamesEnum = 'Cisco_UCS' | 'HPE';

/**
 * Defines values for HanaInstanceSizeNamesEnum.
 * Possible values include: 'S72m', 'S144m', 'S72', 'S144', 'S192', 'S192m', 'S192xm', 'S96',
 * 'S384', 'S384m', 'S384xm', 'S384xxm', 'S576m', 'S576xm', 'S768', 'S768m', 'S768xm', 'S960m'
 * @readonly
 * @enum {string}
 */
export type HanaInstanceSizeNamesEnum = 'S72m' | 'S144m' | 'S72' | 'S144' | 'S192' | 'S192m' | 'S192xm' | 'S96' | 'S384' | 'S384m' | 'S384xm' | 'S384xxm' | 'S576m' | 'S576xm' | 'S768' | 'S768m' | 'S768xm' | 'S960m';

/**
 * Defines values for HanaInstancePowerStateEnum.
 * Possible values include: 'starting', 'started', 'stopping', 'stopped', 'restarting', 'unknown'
 * @readonly
 * @enum {string}
 */
export type HanaInstancePowerStateEnum = 'starting' | 'started' | 'stopping' | 'stopped' | 'restarting' | 'unknown';

/**
 * Defines values for HanaDatabaseContainersEnum.
 * Possible values include: 'single', 'multiple'
 * @readonly
 * @enum {string}
 */
export type HanaDatabaseContainersEnum = 'single' | 'multiple';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type HanaInstancesListResponse = HanaInstancesListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstancesListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type HanaInstancesListByResourceGroupResponse = HanaInstancesListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstancesListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type HanaInstancesGetResponse = HanaInstance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstance;
    };
};

/**
 * Contains response data for the update operation.
 */
export type HanaInstancesUpdateResponse = HanaInstance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstance;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type HanaInstancesListNextResponse = HanaInstancesListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstancesListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type HanaInstancesListByResourceGroupNextResponse = HanaInstancesListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstancesListResult;
    };
};