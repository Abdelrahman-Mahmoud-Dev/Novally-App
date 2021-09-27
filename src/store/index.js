import { createStore } from "vuex";
import Data from "../assets/DummyData/data.json";
export default createStore({
    state() {
        return {
            allData: Data,
        };
    },

    mutations: {},
    actions: {},
    getters: {
        topSellers(state) {
            return state.allData.topSellers;
        },
        liveAuctions(state) {
            return state.allData.liveAuctions;
        },
        popularCollections(state) {
            return state.allData.popularCollections;
        },
        newListedItems(state) {
            return state.allData.newListedItems;
        },
        LastBids(state) {
            return state.allData.LatestBids;
        },
        itemInformation(state) {
            return state.allData.itemInformation;
        },
        highestBid(state) {
            return state.allData.highestBid;
        },
        ourAuthors(state) {
            return state.allData.ourAuthors;
        },
        connectWith(state) {
            return state.allData.connectWith;
        },
        timeLine(state) {
            return state.allData.timeLine;
        },
        newListedItemsProfile(state) {
            return state.allData.newListedItemsProfile;
        },
    },
});