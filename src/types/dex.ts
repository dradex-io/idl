export type Dex = {
  "version": "0.1.0",
  "name": "dex",
  "instructions": [
    {
      "name": "setDexConfig",
      "accounts": [
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "DexConfigInput"
          }
        }
      ]
    },
    {
      "name": "setDexUserFeeTier",
      "accounts": [
        {
          "name": "dexUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "DexUserFeeTierInput"
          }
        }
      ]
    },
    {
      "name": "createDexUser",
      "accounts": [
        {
          "name": "dexUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "referrer",
          "type": {
            "option": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "createMarketUser",
      "accounts": [
        {
          "name": "pair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createMarket",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "t1Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "MarketInput"
          }
        }
      ]
    },
    {
      "name": "addLiquidity",
      "accounts": [
        {
          "name": "pair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "t0Amount",
          "type": "u64"
        },
        {
          "name": "t1Amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquidity",
      "accounts": [
        {
          "name": "pair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createOrder",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "OrderInput"
          }
        }
      ]
    },
    {
      "name": "settleFunds",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "t1Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "cancelOrder",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "CancelOrderInput"
          }
        }
      ]
    },
    {
      "name": "daoSetFundManager",
      "accounts": [
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fundManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "daoClaimRevenue",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "consumeEvents",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "ConsumeEventsInput"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "dexState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "crankPenalty",
            "type": "u16"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "daoConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fundManager",
            "type": "publicKey"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "pair",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pair",
            "type": "publicKey"
          },
          {
            "name": "t0",
            "type": "publicKey"
          },
          {
            "name": "t1",
            "type": "publicKey"
          },
          {
            "name": "t0Vault",
            "type": "publicKey"
          },
          {
            "name": "t1Vault",
            "type": "publicKey"
          },
          {
            "name": "lpToken",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "config",
            "type": {
              "defined": "MarketConfig"
            }
          },
          {
            "name": "orderBook",
            "type": {
              "defined": "OrderBook"
            }
          },
          {
            "name": "nextUserId",
            "type": "u64"
          },
          {
            "name": "tokenDecimals",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "pool",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "daoRevenue",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "eventQueue",
            "type": "publicKey"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u64",
                20
              ]
            }
          }
        ]
      }
    },
    {
      "name": "marketUser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "t0Pending",
            "type": "u64"
          },
          {
            "name": "t1Pending",
            "type": "u64"
          },
          {
            "name": "t0Unlocked",
            "type": "u64"
          },
          {
            "name": "t1Unlocked",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "dexUser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeTier",
            "type": {
              "defined": "UserFeeTier"
            }
          },
          {
            "name": "stakedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "eventQueue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "len",
            "type": "u32"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "items",
            "type": {
              "array": [
                {
                  "defined": "EventItem"
                },
                128
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "FeeRates",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maker",
            "type": "u64"
          },
          {
            "name": "taker",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "MarketConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "t0LotSize",
            "type": "u64"
          },
          {
            "name": "t1LotSize",
            "type": "u64"
          },
          {
            "name": "feeRates",
            "type": {
              "defined": "FeeRates"
            }
          }
        ]
      }
    },
    {
      "name": "MarketInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "t0LotSize",
            "type": "u64"
          },
          {
            "name": "t1LotSize",
            "type": "u64"
          },
          {
            "name": "feeTier",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "OrderInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "type": "u8"
          },
          {
            "name": "limitPrice",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "clientOrderId",
            "type": "u64"
          },
          {
            "name": "orderType",
            "type": "u8"
          },
          {
            "name": "limitTotal",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "minAmountOut",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "OrderBook",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bids",
            "type": "publicKey"
          },
          {
            "name": "asks",
            "type": "publicKey"
          },
          {
            "name": "nextSeqNum",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CancelOrderInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "type": "u8"
          },
          {
            "name": "orderId",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "EventItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "flag",
            "type": "u8"
          },
          {
            "name": "feeTier",
            "type": {
              "defined": "UserFeeTier"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "key",
            "type": "u128"
          },
          {
            "name": "owner",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "quantity",
            "type": "u64"
          },
          {
            "name": "total",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "DexConfigInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "crankPenalty",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "DexUserFeeTierInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeTier",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ConsumeEventsInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "limit",
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "OrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Default"
          },
          {
            "name": "ImmediateOrCancel"
          },
          {
            "name": "PostOnly"
          }
        ]
      }
    },
    {
      "name": "MarketFeeTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Default"
          },
          {
            "name": "None"
          },
          {
            "name": "Stable"
          },
          {
            "name": "Classic"
          }
        ]
      }
    },
    {
      "name": "UserFeeTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Default"
          },
          {
            "name": "None"
          },
          {
            "name": "Partner"
          },
          {
            "name": "Referrer"
          }
        ]
      }
    },
    {
      "name": "FeeRole",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Taker"
          },
          {
            "name": "Maker"
          },
          {
            "name": "Both"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unknown",
      "msg": "Unknown error"
    },
    {
      "code": 6001,
      "name": "InsufficientLiquidityAdded",
      "msg": "Insufficient liquidity added"
    },
    {
      "code": 6002,
      "name": "InsufficientLiquidityRemoved",
      "msg": "Insufficient liquidity removed"
    },
    {
      "code": 6003,
      "name": "SlabTooSmall",
      "msg": "Slab too small"
    },
    {
      "code": 6004,
      "name": "SlabOutOfSpace",
      "msg": "Slab out of space"
    },
    {
      "code": 6005,
      "name": "InvalidQuantity",
      "msg": "Invalid quantity"
    },
    {
      "code": 6006,
      "name": "InvalidSide",
      "msg": "Invalid side"
    },
    {
      "code": 6007,
      "name": "OrderNotFound",
      "msg": "Order not found"
    },
    {
      "code": 6008,
      "name": "InvalidLotSize",
      "msg": "Invalid lot size"
    },
    {
      "code": 6009,
      "name": "InvalidFarmStartTime",
      "msg": "Invalid farm start time"
    },
    {
      "code": 6010,
      "name": "InvalidFarmEndTime",
      "msg": "Invalid farm end time"
    },
    {
      "code": 6011,
      "name": "InvalidFarmDuration",
      "msg": "Invalid farm duration"
    },
    {
      "code": 6012,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6013,
      "name": "UnauthorizedOperation",
      "msg": "Unauthorize operation"
    },
    {
      "code": 6014,
      "name": "OrderbookFull",
      "msg": "Order book is full, please submit a better offer"
    },
    {
      "code": 6015,
      "name": "BootedOrdersNotFound",
      "msg": "Order outdated: booted orders not found"
    },
    {
      "code": 6016,
      "name": "InvalidFeeTier",
      "msg": "Invalid fee tier"
    },
    {
      "code": 6017,
      "name": "InvalidOrderType",
      "msg": "Invalid order type"
    },
    {
      "code": 6018,
      "name": "PostOnlyOrderCancelled",
      "msg": "Order cancelled due to Post Only condition"
    },
    {
      "code": 6019,
      "name": "SlippageToleranceExceeded",
      "msg": "Slippage tolerance exceeded"
    },
    {
      "code": 6020,
      "name": "InvalidTradingPair",
      "msg": "Invalid trading pair"
    },
    {
      "code": 6021,
      "name": "InvalidInput",
      "msg": "Invalid input"
    },
    {
      "code": 6022,
      "name": "OrderBookTooLarge",
      "msg": "Order book too large"
    },
    {
      "code": 6023,
      "name": "InvalidDexUser",
      "msg": "Invalid dex user"
    },
    {
      "code": 6024,
      "name": "InvalidMarketUser",
      "msg": "Invalid market user"
    },
    {
      "code": 6025,
      "name": "InvalidRebateAccount",
      "msg": "Invalid rebate account"
    }
  ]
};

export const IDL: Dex = {
  "version": "0.1.0",
  "name": "dex",
  "instructions": [
    {
      "name": "setDexConfig",
      "accounts": [
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "DexConfigInput"
          }
        }
      ]
    },
    {
      "name": "setDexUserFeeTier",
      "accounts": [
        {
          "name": "dexUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "DexUserFeeTierInput"
          }
        }
      ]
    },
    {
      "name": "createDexUser",
      "accounts": [
        {
          "name": "dexUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "referrer",
          "type": {
            "option": {
              "array": [
                "u8",
                32
              ]
            }
          }
        }
      ]
    },
    {
      "name": "createMarketUser",
      "accounts": [
        {
          "name": "pair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createMarket",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "t1Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "MarketInput"
          }
        }
      ]
    },
    {
      "name": "addLiquidity",
      "accounts": [
        {
          "name": "pair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "t0Amount",
          "type": "u64"
        },
        {
          "name": "t1Amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquidity",
      "accounts": [
        {
          "name": "pair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Mint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createOrder",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "OrderInput"
          }
        }
      ]
    },
    {
      "name": "settleFunds",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "t1Mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "cancelOrder",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "dexUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1Vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t0User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "t1User",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "CancelOrderInput"
          }
        }
      ]
    },
    {
      "name": "daoSetFundManager",
      "accounts": [
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fundManager",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "daoClaimRevenue",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "marketVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "consumeEvents",
      "accounts": [
        {
          "name": "pair",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "master",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "logger",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "input",
          "type": {
            "defined": "ConsumeEventsInput"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "dexState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "crankPenalty",
            "type": "u16"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                7
              ]
            }
          }
        ]
      }
    },
    {
      "name": "daoConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fundManager",
            "type": "publicKey"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u64",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "pair",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pair",
            "type": "publicKey"
          },
          {
            "name": "t0",
            "type": "publicKey"
          },
          {
            "name": "t1",
            "type": "publicKey"
          },
          {
            "name": "t0Vault",
            "type": "publicKey"
          },
          {
            "name": "t1Vault",
            "type": "publicKey"
          },
          {
            "name": "lpToken",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "config",
            "type": {
              "defined": "MarketConfig"
            }
          },
          {
            "name": "orderBook",
            "type": {
              "defined": "OrderBook"
            }
          },
          {
            "name": "nextUserId",
            "type": "u64"
          },
          {
            "name": "tokenDecimals",
            "type": {
              "array": [
                "u8",
                2
              ]
            }
          },
          {
            "name": "pool",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "daoRevenue",
            "type": {
              "array": [
                "u64",
                2
              ]
            }
          },
          {
            "name": "eventQueue",
            "type": "publicKey"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u64",
                20
              ]
            }
          }
        ]
      }
    },
    {
      "name": "marketUser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "t0Pending",
            "type": "u64"
          },
          {
            "name": "t1Pending",
            "type": "u64"
          },
          {
            "name": "t0Unlocked",
            "type": "u64"
          },
          {
            "name": "t1Unlocked",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "dexUser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeTier",
            "type": {
              "defined": "UserFeeTier"
            }
          },
          {
            "name": "stakedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "eventQueue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "len",
            "type": "u32"
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                4
              ]
            }
          },
          {
            "name": "items",
            "type": {
              "array": [
                {
                  "defined": "EventItem"
                },
                128
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "FeeRates",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "maker",
            "type": "u64"
          },
          {
            "name": "taker",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "MarketConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "t0LotSize",
            "type": "u64"
          },
          {
            "name": "t1LotSize",
            "type": "u64"
          },
          {
            "name": "feeRates",
            "type": {
              "defined": "FeeRates"
            }
          }
        ]
      }
    },
    {
      "name": "MarketInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "t0LotSize",
            "type": "u64"
          },
          {
            "name": "t1LotSize",
            "type": "u64"
          },
          {
            "name": "feeTier",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "OrderInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "type": "u8"
          },
          {
            "name": "limitPrice",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "clientOrderId",
            "type": "u64"
          },
          {
            "name": "orderType",
            "type": "u8"
          },
          {
            "name": "limitTotal",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "minAmountOut",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "OrderBook",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bids",
            "type": "publicKey"
          },
          {
            "name": "asks",
            "type": "publicKey"
          },
          {
            "name": "nextSeqNum",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CancelOrderInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "side",
            "type": "u8"
          },
          {
            "name": "orderId",
            "type": "u128"
          }
        ]
      }
    },
    {
      "name": "EventItem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "flag",
            "type": "u8"
          },
          {
            "name": "feeTier",
            "type": {
              "defined": "UserFeeTier"
            }
          },
          {
            "name": "padding",
            "type": {
              "array": [
                "u8",
                6
              ]
            }
          },
          {
            "name": "key",
            "type": "u128"
          },
          {
            "name": "owner",
            "type": {
              "array": [
                "u64",
                4
              ]
            }
          },
          {
            "name": "quantity",
            "type": "u64"
          },
          {
            "name": "total",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "DexConfigInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "crankPenalty",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "DexUserFeeTierInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "feeTier",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ConsumeEventsInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "limit",
            "type": {
              "option": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "OrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Default"
          },
          {
            "name": "ImmediateOrCancel"
          },
          {
            "name": "PostOnly"
          }
        ]
      }
    },
    {
      "name": "MarketFeeTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Default"
          },
          {
            "name": "None"
          },
          {
            "name": "Stable"
          },
          {
            "name": "Classic"
          }
        ]
      }
    },
    {
      "name": "UserFeeTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Default"
          },
          {
            "name": "None"
          },
          {
            "name": "Partner"
          },
          {
            "name": "Referrer"
          }
        ]
      }
    },
    {
      "name": "FeeRole",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Taker"
          },
          {
            "name": "Maker"
          },
          {
            "name": "Both"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Unknown",
      "msg": "Unknown error"
    },
    {
      "code": 6001,
      "name": "InsufficientLiquidityAdded",
      "msg": "Insufficient liquidity added"
    },
    {
      "code": 6002,
      "name": "InsufficientLiquidityRemoved",
      "msg": "Insufficient liquidity removed"
    },
    {
      "code": 6003,
      "name": "SlabTooSmall",
      "msg": "Slab too small"
    },
    {
      "code": 6004,
      "name": "SlabOutOfSpace",
      "msg": "Slab out of space"
    },
    {
      "code": 6005,
      "name": "InvalidQuantity",
      "msg": "Invalid quantity"
    },
    {
      "code": 6006,
      "name": "InvalidSide",
      "msg": "Invalid side"
    },
    {
      "code": 6007,
      "name": "OrderNotFound",
      "msg": "Order not found"
    },
    {
      "code": 6008,
      "name": "InvalidLotSize",
      "msg": "Invalid lot size"
    },
    {
      "code": 6009,
      "name": "InvalidFarmStartTime",
      "msg": "Invalid farm start time"
    },
    {
      "code": 6010,
      "name": "InvalidFarmEndTime",
      "msg": "Invalid farm end time"
    },
    {
      "code": 6011,
      "name": "InvalidFarmDuration",
      "msg": "Invalid farm duration"
    },
    {
      "code": 6012,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6013,
      "name": "UnauthorizedOperation",
      "msg": "Unauthorize operation"
    },
    {
      "code": 6014,
      "name": "OrderbookFull",
      "msg": "Order book is full, please submit a better offer"
    },
    {
      "code": 6015,
      "name": "BootedOrdersNotFound",
      "msg": "Order outdated: booted orders not found"
    },
    {
      "code": 6016,
      "name": "InvalidFeeTier",
      "msg": "Invalid fee tier"
    },
    {
      "code": 6017,
      "name": "InvalidOrderType",
      "msg": "Invalid order type"
    },
    {
      "code": 6018,
      "name": "PostOnlyOrderCancelled",
      "msg": "Order cancelled due to Post Only condition"
    },
    {
      "code": 6019,
      "name": "SlippageToleranceExceeded",
      "msg": "Slippage tolerance exceeded"
    },
    {
      "code": 6020,
      "name": "InvalidTradingPair",
      "msg": "Invalid trading pair"
    },
    {
      "code": 6021,
      "name": "InvalidInput",
      "msg": "Invalid input"
    },
    {
      "code": 6022,
      "name": "OrderBookTooLarge",
      "msg": "Order book too large"
    },
    {
      "code": 6023,
      "name": "InvalidDexUser",
      "msg": "Invalid dex user"
    },
    {
      "code": 6024,
      "name": "InvalidMarketUser",
      "msg": "Invalid market user"
    },
    {
      "code": 6025,
      "name": "InvalidRebateAccount",
      "msg": "Invalid rebate account"
    }
  ]
};
