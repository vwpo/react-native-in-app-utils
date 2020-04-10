export declare type Purchase = {
    originalTransactionDate: number;
    originalTransactionIdentifier: string;
    transactionDate: number;
    transactionIdentifier: string;
    productIdentifier: string;
    transactionReceipt: string;
};
export declare type AppleProductInfo = {
    identifier: string;
    price: number;
    currencySymbol: string;
    currencyCode: string;
    priceString: string;
    countryCode: string;
    isDownloadable: boolean;
    description: string;
    title: string;
};
declare const RNInAppUtils: {
    purchase: (id: string) => Promise<Purchase>;
    mayPurchase: () => Promise<boolean>;
    fetch: (ids: string[]) => Promise<AppleProductInfo[]>;
    restore: () => Promise<Purchase[]>;
};
export default RNInAppUtils;
