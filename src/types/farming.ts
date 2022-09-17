export type Farming = {
  "version": "0.1.0",
  "name": "farming",
  "instructions": [
    {
      "name": "createFarm",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
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
          "isMut": false,
          "isSigner": false
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
          "name": "clock",
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
            "defined": "CreateFarmInput"
          }
        }
      ]
    },
    {
      "name": "farmDeposit",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
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
          "isMut": false,
          "isSigner": false
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
          "name": "clock",
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
      "name": "farmWithdraw",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
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
          "isMut": false,
          "isSigner": false
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
          "name": "clock",
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
        },
        {
          "name": "harvest",
          "type": "bool"
        }
      ]
    },
    {
      "name": "closeFarm",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
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
          "isMut": false,
          "isSigner": false
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
          "name": "clock",
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
    }
  ],
  "accounts": [
    {
      "name": "farmingConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserved",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "farm",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "startAt",
            "type": "u64"
          },
          {
            "name": "endAt",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
          },
          {
            "name": "amountStaked",
            "type": "u64"
          },
          {
            "name": "lpToken",
            "type": "publicKey"
          },
          {
            "name": "tokenVault",
            "type": "publicKey"
          },
          {
            "name": "lpTokenVault",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "farmUser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountStaked",
            "type": "u64"
          },
          {
            "name": "stakedAt",
            "type": "u64"
          },
          {
            "name": "unclaimedReward",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateFarmInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "startAt",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
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
      "name": "InvalidFarmStartTime",
      "msg": "Invalid farm start time"
    },
    {
      "code": 6002,
      "name": "InvalidFarmEndTime",
      "msg": "Invalid farm end time"
    },
    {
      "code": 6003,
      "name": "InvalidFarmDuration",
      "msg": "Invalid farm duration"
    },
    {
      "code": 6004,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6005,
      "name": "InvalidInput",
      "msg": "Invalid input"
    },
    {
      "code": 6006,
      "name": "UnauthorizedOperation",
      "msg": "Unauthorized operation"
    }
  ]
};

export const IDL: Farming = {
  "version": "0.1.0",
  "name": "farming",
  "instructions": [
    {
      "name": "createFarm",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "market",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
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
          "isMut": false,
          "isSigner": false
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
          "name": "clock",
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
            "defined": "CreateFarmInput"
          }
        }
      ]
    },
    {
      "name": "farmDeposit",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
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
          "isMut": false,
          "isSigner": false
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
          "name": "clock",
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
      "name": "farmWithdraw",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
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
          "isMut": false,
          "isSigner": false
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
          "name": "clock",
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
        },
        {
          "name": "harvest",
          "type": "bool"
        }
      ]
    },
    {
      "name": "closeFarm",
      "accounts": [
        {
          "name": "farm",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "farmVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpTokenVault",
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
          "isMut": false,
          "isSigner": false
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
          "name": "clock",
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
    }
  ],
  "accounts": [
    {
      "name": "farmingConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reserved",
            "type": {
              "array": [
                "u64",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "farm",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "market",
            "type": "publicKey"
          },
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "startAt",
            "type": "u64"
          },
          {
            "name": "endAt",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
          },
          {
            "name": "amountStaked",
            "type": "u64"
          },
          {
            "name": "lpToken",
            "type": "publicKey"
          },
          {
            "name": "tokenVault",
            "type": "publicKey"
          },
          {
            "name": "lpTokenVault",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "farmUser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amountStaked",
            "type": "u64"
          },
          {
            "name": "stakedAt",
            "type": "u64"
          },
          {
            "name": "unclaimedReward",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "CreateFarmInput",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "startAt",
            "type": "u64"
          },
          {
            "name": "duration",
            "type": "u64"
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
      "name": "InvalidFarmStartTime",
      "msg": "Invalid farm start time"
    },
    {
      "code": 6002,
      "name": "InvalidFarmEndTime",
      "msg": "Invalid farm end time"
    },
    {
      "code": 6003,
      "name": "InvalidFarmDuration",
      "msg": "Invalid farm duration"
    },
    {
      "code": 6004,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6005,
      "name": "InvalidInput",
      "msg": "Invalid input"
    },
    {
      "code": 6006,
      "name": "UnauthorizedOperation",
      "msg": "Unauthorized operation"
    }
  ]
};
