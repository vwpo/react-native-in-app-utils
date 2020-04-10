import { NativeModules } from "react-native"

export type Purchase = {
	originalTransactionDate: number;
	originalTransactionIdentifier: string;
	transactionDate: number;
	transactionIdentifier: string;
	productIdentifier: string;
	transactionReceipt: string;
}

export type AppleProductInfo = {
	identifier: string;
	price: number;
	currencySymbol: string;
	currencyCode: string;
	priceString: string;
	countryCode: string;
	isDownloadable: boolean;
	description: string;
	title: string;
}

const { InAppUtils } = NativeModules

function toPromise<T>(action: (handler: (error: any, result: T) => void) => void) {
	return new Promise<T>((resolve, reject) =>
		action((error, result) => error ? reject(error) : resolve(result)),
	)
}

const RNInAppUtils = {
	purchase: (id: string) => toPromise<Purchase>(cb => InAppUtils.purchaseProduct(id, cb)),
	mayPurchase: () => toPromise<boolean>(callback => {
		InAppUtils.canMakePayments((res: boolean) => callback(null, res))
	}),
	fetch: (ids: string[]) => toPromise<AppleProductInfo[]>(cb => InAppUtils.loadProducts(ids, cb)),
	restore: () => toPromise<Purchase[]>(InAppUtils.restorePurchases),
}

export default RNInAppUtils
