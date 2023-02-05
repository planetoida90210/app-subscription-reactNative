import { useEffect, useState } from "react";
import { Platform } from "react-native";
import Purchases, { CustomerInfo, PurchasesOffering } from "react-native-purchases";

const APIKeys = {
    apple: process.env.REVENUE_CAT_APPLE_KEY!,
    google: "revenuecat_google_api_key",
}

const typesOfMembership = {
    monthly: "proMonthly",
    yearly: "proYearly",
}

function useRevenueCat() {
    const [ currentOffering, setCurrentOffering ] = useState<PurchasesOffering | null>(null);
    const [ customerInfo, setCustomerInfo ] = useState<CustomerInfo | null>(null);

    const isProMember = 
        customerInfo?.activeSubscriptions.includes(typesOfMembership.monthly) ||
        customerInfo?.activeSubscriptions.includes(typesOfMembership.yearly);

       useEffect(() => {
            const fetchData = async () => {
                Purchases.setDebugLogsEnabled(true);

                if (Platform.OS == 'android') {
                    await Purchases.configure({ apiKey: APIKeys.google });
                  } else {
                    await Purchases.configure({ apiKey: APIKeys.apple })
                  }

                const offerings = await Purchases.getOfferings();
                const customerInfo = await Purchases.getCustomerInfo();

                setCustomerInfo(customerInfo);
                setCurrentOffering(offerings.current);
            };

            fetchData().catch(console.error);
       }, []) 

        useEffect(() => {
            

        }, [])
}

export default useRevenueCat