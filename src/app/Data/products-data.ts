import { Product } from "../shared/Models/Product";
import { ProductCategory } from "../shared/Models/ProductCategories";
import { ProductSubCategory } from "../shared/Models/ProductSubCategories";

export const PRODUCTS: Product[] = [
  // Biometric Hardware Devices
    {name:'BFPB-BW01', description:'Biometric Finger Print Basic BFPB-BW01', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_Basic_BFPB-BW01.jpg'},
    {name:'BFP-B01', description:'Biometric Finger Print BFP-B01', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_BFP-B01.jpg'},
    {name:'BFP-W01', description:'Biometric Finger Print BFP-W01', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_BFP-W01.jpg'},
    {name:'BFP-BW01', description:'Biometric Finger Print BFP-BW01', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_BFP-BW01.jpg'},
    {name:'BFP-BW02', description:'Biometric Finger Print BFP-BW02', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_BFP-BW02.jpg'},
    {name:'BFP-BW03', description:'Biometric Finger Print BFP-BW03', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_BFP-BW03.jpg'},
    {name:'BFPM-W01', description:'Biometric Finger Print Mini BFPM-W01', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_Mini_BFPM-W01.jpg'},
    {name:'BFPM-BW01', description:'Biometric Finger Print Mini BFPM-BW01', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_Mini_BFPM-BW01.jpg'},
    {name:'BFPM-BW02', description:'Biometric Finger Print Mini BFPM-BW02', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_Mini_BFPM-BW02.jpg'},
    {name:'BFPS-S01', description:'Biometric Finger Print Smartcard Reader BFPS-S01', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_Smartcard_Reader_BFPS-S01.jpeg'},
    {name:'BFPS-W01', description:'Biometric Finger Print Smartcard Reader BFPS-W01', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_Smartcard_Reader_BFPS-W01.jpeg'},
    {name:'BFPS-W02', description:'Biometric Finger Print Smartcard Reader BFPS-W02', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricHardware, imgpath:'assets/ProductsPics/BiometricHardware/Biometric_Finger_Print_Smartcard_Reader_BFPS-W02.jpg'},
  // Biometric Software Devices
    {name:'Multibiometric SDK', description:'Large Scale AFIS and multi-biometric identification', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricSoftware, imgpath:'assets/ProductsPics/BiometricSoftware/Multibiometric_SDK.jpg'},
    {name:'FingerPrint Standard SDK', description:'Fingerprint identification for stand-alone or Web solutions', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricSoftware, imgpath:'assets/ProductsPics/BiometricSoftware/FingerPrint_Standard_SDK.jpg'},
    {name:'Face Verification SDK', description:'Biometric Identity Verification for Large-scale High-security Applications', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricSoftware, imgpath:'assets/ProductsPics/BiometricSoftware/Face_Verification_SDK.jpg'},
    {name:'Standard Iris Recognition SDK', description:'Iris identification for PC and Web solutions', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.BiometricSoftware, imgpath:'assets/ProductsPics/BiometricSoftware/Standard_Iris_Recognition_SDK.jpg'},
  // Biometric Security Devices
    {name:'Basic IP Camera Setup', description:'Internet Protocol camera configuration with networking', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.Security, imgpath:'assets/ProductsPics/Security/Basic_IP_Camera_Setup.jpg'},
    {name:'HD CCTV Camera Setup', description:'CCTV Camera setup for both indoor & outdoor security', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.Security, imgpath:'assets/ProductsPics/Security/HD_CCTV_Camera_Setup.jpg'},
    {name:'Home Automation', description:'Home Automation system to control lighting, climate, entertainment systems and appliances', category:ProductCategory.BiometricAndSecurity, subCategory:ProductSubCategory.Security, imgpath:'assets/ProductsPics/Security/Home_Automation.jpg'},
  // Hardware Devices
    {name:'HD-01', description:'Hardware Device HD-01', category:ProductCategory.HardwareDevices, subCategory:ProductSubCategory.HardwareDevices, imgpath:'assets/ProductsPics/HardwareDevices/Hardware_Device_HD-01.jpg'},
    {name:'HD-02', description:'Hardware Device HD-02', category:ProductCategory.HardwareDevices, subCategory:ProductSubCategory.HardwareDevices, imgpath:'assets/ProductsPics/HardwareDevices/Hardware_Device_HD-02.jpg'}
  // Iot Devices
    // {name:'Sample-33', description:'', category:ProductCategory.Iot, subCategory:ProductSubCategory.Iot, imgpath:'assets/ProductsPics/sample-8.jpg'}
  ];