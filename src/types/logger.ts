export type Logger = {
  "version": "0.1.0",
  "name": "logger",
  "instructions": [
    {
      "name": "log",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "content",
          "type": "string"
        }
      ]
    }
  ]
};

export const IDL: Logger = {
  "version": "0.1.0",
  "name": "logger",
  "instructions": [
    {
      "name": "log",
      "accounts": [
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "content",
          "type": "string"
        }
      ]
    }
  ]
};
