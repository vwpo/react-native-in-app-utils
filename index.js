"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const { InAppUtils } = react_native_1.NativeModules;
function toPromise(action) {
    return new Promise((resolve, reject) => action((error, result) => error ? reject(error) : resolve(result)));
}
const RNInAppUtils = {
    purchase: (id) => toPromise(cb => InAppUtils.purchaseProduct(id, cb)),
    mayPurchase: () => toPromise(callback => {
        InAppUtils.canMakePayments((res) => callback(null, res));
    }),
    fetch: (ids) => toPromise(cb => InAppUtils.loadProducts(ids, cb)),
    restore: () => toPromise(InAppUtils.restorePurchases)
};
exports.default = RNInAppUtils;
