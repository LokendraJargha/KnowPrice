import type { Schema, Attribute } from '@strapi/strapi';

export interface StoragesStorages extends Schema.Component {
  collectionName: 'components_storages_storages';
  info: {
    displayName: 'Storages';
  };
  attributes: {
    Primary: Attribute.String;
    Secondary: Attribute.String;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface StorageStorage extends Schema.Component {
  collectionName: 'components_storage_storages';
  info: {
    displayName: 'STORAGE';
  };
  attributes: {};
}

export interface SpecificationListSpecificationList extends Schema.Component {
  collectionName: 'components_specification_list_specification_lists';
  info: {
    displayName: 'SpecificationList';
    description: '';
  };
  attributes: {
    SpecificationLabel: Attribute.String;
    SpecificationValue: Attribute.String;
  };
}

export interface SpecificationSpecification extends Schema.Component {
  collectionName: 'components_specification_specifications';
  info: {
    displayName: 'Specification';
    description: '';
  };
  attributes: {
    SpecificationName: Attribute.String;
    SpecificationList: Attribute.Component<
      'specification-list.specification-list',
      true
    >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SensorsSensors extends Schema.Component {
  collectionName: 'components_sensors_sensors';
  info: {
    displayName: 'SENSORS';
    description: '';
  };
  attributes: {
    Fingerprint: Attribute.String;
    Others: Attribute.String;
  };
}

export interface SecuritySecurity extends Schema.Component {
  collectionName: 'components_security_securities';
  info: {
    displayName: 'SECURITY';
  };
  attributes: {};
}

export interface ProductInfoProductInfo extends Schema.Component {
  collectionName: 'components_product_info_product_infos';
  info: {
    displayName: 'ProductInfo';
  };
  attributes: {
    isNew: Attribute.Boolean;
    BestDeals: Attribute.Boolean;
    Hero: Attribute.Boolean;
    FindStore: Attribute.String;
  };
}

export interface PricePrice extends Schema.Component {
  collectionName: 'components_price_prices';
  info: {
    displayName: 'Price';
  };
  attributes: {
    Variant: Attribute.String;
    Price: Attribute.String;
  };
}

export interface MobileSpecificationMobileSpecification
  extends Schema.Component {
  collectionName: 'components_mobile_spec';
  info: {
    displayName: 'MobileSpecification';
    description: '';
  };
  attributes: {
    BODY: Attribute.Component<'body.body'>;
    DISPLAY: Attribute.Component<'display.display'>;
    PERFORMANCE: Attribute.Component<'performance.performance'>;
    MEMORY: Attribute.Component<'memory.memory'>;
    CONNECTIVITY: Attribute.Component<'connectivity.connectivity'>;
    MEDIA: Attribute.Component<'multimedia.multimedia'>;
    SENSORS: Attribute.Component<'sensors.sensors'>;
    BATTERY: Attribute.Component<'battery.battery'>;
    FRONT_CAMERA: Attribute.Component<'front-camera.front-camera'>;
    MAIN_CAMERA: Attribute.Component<'back-camera.back-camera'>;
  };
}

export interface PerformancePerformance extends Schema.Component {
  collectionName: 'components_performance_performances';
  info: {
    displayName: 'PERFORMANCE';
    description: '';
  };
  attributes: {
    Chipset: Attribute.String;
    CPU: Attribute.Text;
    Graphics: Attribute.String;
    OS: Attribute.String;
  };
}

export interface KeySpecificationKeySpecification extends Schema.Component {
  collectionName: 'components_key_specs';
  info: {
    displayName: 'KeySpecification';
    description: '';
  };
  attributes: {
    Displays: Attribute.Component<'displays.displays'>;
    Cameras: Attribute.Component<'cameras.cameras'>;
    Batteries: Attribute.Component<'batteries.batteries'>;
    Storages: Attribute.Component<'storages.storages'>;
  };
}

export interface DisplaysDisplays extends Schema.Component {
  collectionName: 'components_displays_displays';
  info: {
    displayName: 'Displays';
  };
  attributes: {
    Primary: Attribute.String;
    Secondary: Attribute.String;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface DisplayDisplay extends Schema.Component {
  collectionName: 'components_display_displays';
  info: {
    displayName: 'DISPLAY';
    description: '';
  };
  attributes: {
    Type: Attribute.String;
    Size: Attribute.String;
    Resolution: Attribute.Text;
    Protection: Attribute.String;
    Others: Attribute.Text;
  };
}

export interface MemoryMemory extends Schema.Component {
  collectionName: 'components_memory_memories';
  info: {
    displayName: 'MEMORY';
  };
  attributes: {
    RAM: Attribute.String;
    Storage: Attribute.String;
  };
}

export interface MultimediaMultimedia extends Schema.Component {
  collectionName: 'components_multimedia_multimedias';
  info: {
    displayName: 'Multimedia';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Jack: Attribute.String;
    Speakers: Attribute.String;
    Microphones: Attribute.String;
    Others: Attribute.String;
  };
}

export interface ConnectivityConnectivity extends Schema.Component {
  collectionName: 'components_connectivity_connectivities';
  info: {
    displayName: 'CONNECTIVITY';
  };
  attributes: {
    WiFi: Attribute.String;
    Bluetooth: Attribute.String;
    SIM: Attribute.String;
    GPS: Attribute.String;
    USB: Attribute.String;
    Others: Attribute.String;
  };
}

export interface FrontCameraFrontCamera extends Schema.Component {
  collectionName: 'components_front_camera_front_cameras';
  info: {
    displayName: 'FRONT_CAMERA';
    description: '';
  };
  attributes: {
    Setup: Attribute.String;
    Resolution: Attribute.Text;
    Video: Attribute.String;
    Features: Attribute.String;
  };
}

export interface CamerasCameras extends Schema.Component {
  collectionName: 'components_cameras_cameras';
  info: {
    displayName: 'Cameras';
  };
  attributes: {
    Primary: Attribute.String;
    Secondary: Attribute.String;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BatteryBattery extends Schema.Component {
  collectionName: 'components_battery_batteries';
  info: {
    displayName: 'BATTERY';
    description: '';
  };
  attributes: {
    Type: Attribute.String;
    Charging: Attribute.String;
    Others: Attribute.Text;
  };
}

export interface BodyBody extends Schema.Component {
  collectionName: 'components_body_bodies';
  info: {
    displayName: 'BODY';
    description: '';
  };
  attributes: {
    Dimension: Attribute.String;
    Weight: Attribute.String;
    Build: Attribute.Text;
    Colors: Attribute.String;
  };
}

export interface BackCameraBackCamera extends Schema.Component {
  collectionName: 'components_back_camera_back_cameras';
  info: {
    displayName: 'BACK_CAMERA';
    description: '';
  };
  attributes: {
    Setup: Attribute.String;
    Resolution: Attribute.Text;
    Video: Attribute.String;
    Features: Attribute.String;
  };
}

export interface BatteriesBatteries extends Schema.Component {
  collectionName: 'components_batteries_batteries';
  info: {
    displayName: 'Batteries';
    description: '';
  };
  attributes: {
    Primary: Attribute.String;
    Secondary: Attribute.String;
    Icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'storages.storages': StoragesStorages;
      'storage.storage': StorageStorage;
      'specification-list.specification-list': SpecificationListSpecificationList;
      'specification.specification': SpecificationSpecification;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'sensors.sensors': SensorsSensors;
      'security.security': SecuritySecurity;
      'product-info.product-info': ProductInfoProductInfo;
      'price.price': PricePrice;
      'mobile-specification.mobile-specification': MobileSpecificationMobileSpecification;
      'performance.performance': PerformancePerformance;
      'key-specification.key-specification': KeySpecificationKeySpecification;
      'displays.displays': DisplaysDisplays;
      'display.display': DisplayDisplay;
      'memory.memory': MemoryMemory;
      'multimedia.multimedia': MultimediaMultimedia;
      'connectivity.connectivity': ConnectivityConnectivity;
      'front-camera.front-camera': FrontCameraFrontCamera;
      'cameras.cameras': CamerasCameras;
      'battery.battery': BatteryBattery;
      'body.body': BodyBody;
      'back-camera.back-camera': BackCameraBackCamera;
      'batteries.batteries': BatteriesBatteries;
    }
  }
}
