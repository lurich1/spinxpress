"use strict";
(self.webpackChunklauncher = self.webpackChunklauncher || []).push([
    [6299], {
        6299(e, t, a) {
            a.r(t), a.d(t, {
                BaseHubMethodNames: () => i,
                BaseHubRequests: () => s,
                BaseHubResponseModels: () => r,
                types: () => n,
                useBaseRequests: () => o
            });
            var n = {
                    string: "",
                    number: 0,
                    array: [],
                    object: {},
                    bool: !1,
                    date: new Date
                },
                i = {
                    Ping: "Ping",
                    GetBalance: "GetBalance",
                    GetInitialState: "GetInitialState",
                    GetInitialStateGameTickets: "GetInitialStateGameTickets",
                    GetInitialStateHistory: "GetInitialStateHistory",
                    GetInitialStateMaxWinners: "GetInitialStateMaxWinners",
                    GetInitialStateLeaders: "GetInitialStateLeaders",
                    GetInitialStateGameResults: "GetInitialStateGameResults",
                    GetInitialStateStatistics: "GetInitialStateStatistics",
                    GetInitialStateCashBackInfo: "GetInitialStateCashBackInfo",
                    GetInitialStateLastRoundTickets: "GetInitialStateLastRoundTickets",
                    GenerateHashCode: "GenerateHashCode",
                    History: "History",
                    BonusHistory: "BonusHistory",
                    BonusInfo: "BonusInfo",
                    BonusNotify: "BonusNotify",
                    Error: "Error",
                    LogOutPlayer: "LogOutPlayer",
                    ExpiredToken: "ExpiredToken",
                    Deactivated: "Deactivated",
                    UpdateWinners: "UpdateWinners",
                    GetMaxWinners: "GetMaxWinners",
                    ActiveLeaderboardInfo: "ActiveLeaderboardInfo",
                    LeaderboardPlayersListUpdate: "LeaderboardPlayersListUpdate",
                    LeaderboardPlayerScoreUpdate: "LeaderboardPlayerScoreUpdate",
                    LeaderboardInfo: "LeaderboardInfo",
                    LeaderboardHistory: "LeaderboardHistory",
                    LeaderboardStart: "LeaderboardStart",
                    LeaderboardFinish: "LeaderboardFinish",
                    LeaderboardPlayerWin: "LeaderboardPlayerWin",
                    UpcomingLeaderboards: "UpcomingLeaderboards",
                    Validation: "Validation",
                    UnderConstruction: "UnderConstruction",
                    Reload: "Reload",
                    MaxWinnersResponse: "MaxWinnersResponse",
                    GameTicketsResponse: "GameTicketsResponse",
                    GetLeaders: "GetLeaders",
                    GetLeadersResponse: "GetLeadersResponse",
                    GetStatistics: "GetStatistics",
                    StatisticsResponse: "StatisticsResponse",
                    GetGameResults: "GetGameResults",
                    GameResultsResponse: "GameResultsResponse",
                    GetGameTickets: "GetGameTickets",
                    GetLastRoundTickets: "GetLastRoundTickets",
                    LastRoundTicketsResponse: "LastRoundTicketsResponse",
                    NetPosition: "NetPosition"
                },
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    return {
                        Ping: function() {
                            this.name = i.Ping, this.model = {
                                version: e
                            }, this.messagePackModel = this.model
                        },
                        GetBalance: function(t) {
                            var a = t.token,
                                n = void 0 === a ? 0 : a;
                            this.name = i.GetBalance, this.model = {
                                version: e,
                                token: n
                            }, this.messagePackModel = this.model
                        },
                        GetInitialState: function(e) {
                            var t = e.culture,
                                a = void 0 === t ? "" : t;
                            this.name = i.GetInitialState, this.model = {
                                culture: a
                            }, this.messagePackModel = this.model
                        },
                        GenerateHashCode: function(t) {
                            var a = t.key,
                                n = void 0 === a ? "" : a,
                                s = t.salt,
                                o = void 0 === s ? "" : s;
                            this.name = i.GenerateHashCode, this.model = {
                                version: e,
                                key: n,
                                salt: o
                            }, this.messagePackModel = this.model
                        },
                        History: function() {
                            this.name = i.History
                        },
                        GetLeaders: function() {
                            this.name = i.GetLeaders
                        },
                        GetStatistics: function() {
                            this.name = i.GetStatistics
                        },
                        GetGameResults: function() {
                            this.name = i.GetGameResults
                        },
                        BonusHistory: function(t) {
                            var a = t.token,
                                n = void 0 === a ? "" : a;
                            this.name = i.BonusHistory, this.model = {
                                version: e,
                                token: n
                            }, this.messagePackModel = this.model
                        },
                        BonusInfo: function(t) {
                            var a = t.token,
                                n = void 0 === a ? "" : a,
                                s = t.activeGameId,
                                o = void 0 === s ? 0 : s;
                            this.name = i.BonusInfo, this.model = {
                                version: e,
                                token: n,
                                activeGameId: o
                            }, this.messagePackModel = this.model
                        },
                        GetMaxWinners: function() {
                            this.name = i.GetMaxWinners
                        },
                        GetGameTickets: function() {
                            this.name = i.GetGameTickets
                        },
                        GetLastRoundTickets: function() {
                            this.name = i.GetLastRoundTickets
                        }
                    }
                };

            function o(e, t, a) {
                var n = s(a),
                    i = e || {},
                    o = i.token,
                    r = i.activeGameId,
                    d = i.isDemo,
                    c = i.partnerId,
                    l = i.culture;
                return {
                    getPing: function() {
                        var e = new n.Ping;
                        t(e)
                    },
                    getHashCode: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            i = new n.GenerateHashCode({
                                key: e,
                                salt: a
                            });
                        t(i)
                    },
                    getBetHistory: function() {
                        var e = new n.History({
                            token: o,
                            isDemo: d,
                            partnerId: c
                        });
                        t(e)
                    },
                    getBonusHistory: function() {
                        var e = new n.BonusHistory({
                            token: o
                        });
                        t(e)
                    },
                    getBonusInfo: function() {
                        var e = new n.BonusInfo({
                            token: o,
                            activeGameId: r
                        });
                        t(e)
                    },
                    getInitialState: function() {
                        var e = new n.GetInitialState({
                            activeGameId: r,
                            token: o,
                            isDemo: d,
                            partnerId: c,
                            culture: l
                        });
                        t(e)
                    },
                    getMaxWinners: function(e) {
                        var a = new n.GetMaxWinners({
                            activeGameId: r,
                            isDemo: d,
                            partnerId: c,
                            token: o || e
                        });
                        t(a)
                    },
                    getLeaders: function() {
                        var e = new n.GetLeaders({
                            token: o,
                            isDemo: d,
                            partnerId: c
                        });
                        t(e)
                    },
                    getStatistics: function() {
                        var e = new n.GetStatistics({
                            token: o,
                            isDemo: d,
                            partnerId: c
                        });
                        t(e)
                    },
                    getGameResults: function() {
                        var e = new n.GetGameResults({
                            token: o,
                            isDemo: d,
                            partnerId: c
                        });
                        t(e)
                    },
                    getInitialGameTickets: function() {
                        var e = new n.GetGameTickets({
                            token: o,
                            isDemo: d,
                            partnerId: c
                        });
                        t(e)
                    },
                    getLastRoundTickets: function() {
                        var e = new n.GetLastRoundTickets({
                            token: o,
                            isDemo: d,
                            partnerId: c
                        });
                        t(e)
                    }
                }
            }
            var r = {
                Ping: {},
                GetInitialStateCashBackInfo: {
                    id: 0,
                    fillPercentage: 0,
                    boxCount: 0,
                    boxAmounts: []
                },
                GetBalance: {
                    balance: 0
                },
                GenerateHashCode: {
                    hashCode: ""
                },
                BonusHistory: {
                    bonusHistory: [{
                        type: "string",
                        quantity: 0,
                        bet: 0,
                        date: "1 January, 1970, 00:00:00 UTC",
                        expireDate: "1 January, 1970, 00:00:00 UTC",
                        totalWin: 0
                    }]
                },
                ActiveLeaderboardInfo: {
                    leaderBoard: [{}]
                },
                LeaderboardPlayersListUpdate: {
                    leaderBoard: [{}]
                },
                LeaderboardPlayerScoreUpdate: {
                    leaderBoard: [{}]
                },
                LeaderboardInfo: {
                    leaderBoard: [{}]
                },
                LeaderboardHistory: {
                    leaderBoard: [{}]
                },
                LeaderboardStart: {
                    leaderBoard: [{}]
                },
                LeaderboardFinish: {
                    leaderBoard: [{}]
                },
                LeaderboardPlayerWin: {
                    leaderBoard: [{}]
                },
                Error: {},
                LogOutPlayer: {},
                ExpiredToken: {
                    isExpired: !1,
                    token: ""
                },
                Deactivated: {
                    partnerIds: []
                },
                Validation: {
                    validation: void 0
                },
                UnderConstruction: {
                    underConstructionInfo: []
                }
            }
        }
    }
]);