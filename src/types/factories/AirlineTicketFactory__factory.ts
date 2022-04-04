/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AirlineTicketFactory,
  AirlineTicketFactoryInterface,
} from "../AirlineTicketFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newTicket",
        type: "address",
      },
    ],
    name: "ticketCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "BusinessClassPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EconomyClassPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FirstClassPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_whiteListAddress",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "createTicket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "isWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "libraryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "passenger",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "destination",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "passportID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "class",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_destination",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_passportID",
        type: "uint256",
      },
      {
        internalType: "enum AirlineTicket.PlaneClass",
        name: "_class",
        type: "uint8",
      },
    ],
    name: "passengerData",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_destination",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_passportID",
        type: "uint256",
      },
      {
        internalType: "enum AirlineTicket.PlaneClass",
        name: "_class",
        type: "uint8",
      },
    ],
    name: "receiveEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "remaining",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_whiteListAddress",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_libraryAddress",
        type: "address",
      },
    ],
    name: "setLibraryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whiteListAddresses",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526611c37937e080006000556618de76816d8000600155662386f26fc1000060025534801561003157600080fd5b50600480546001600160a01b031916339081179091556000908152600660205260409020805460ff19166001179055610d218061006f6000396000f3fe6080604052600436106100e85760003560e01c806363c1a9a81161008a57806392bcc8c81161005957806392bcc8c814610287578063b816f5131461029d578063c4d21dc4146102bd578063d1a12c30146102ed57600080fd5b806363c1a9a8146101e95780636e93b78f146101ff5780638da5cb5b1461021f578063920674dc1461025757600080fd5b806329092d0e116100c657806329092d0e146101375780633af32abf146101575780634863ba17146101a557806355234ec0146101c557600080fd5b80630a3b0a4f146100ed5780631d2717091461010f5780631e53a67a14610124575b600080fd5b3480156100f957600080fd5b5061010d610108366004610ad5565b610303565b005b34801561011b57600080fd5b5061010d6103d8565b61010d610132366004610ba8565b610484565b34801561014357600080fd5b5061010d610152366004610ad5565b610503565b34801561016357600080fd5b50610190610172366004610ad5565b6001600160a01b031660009081526006602052604090205460ff1690565b60405190151581526020015b60405180910390f35b3480156101b157600080fd5b5061010d6101c0366004610ad5565b6105d0565b3480156101d157600080fd5b506101db60035481565b60405190815260200161019c565b3480156101f557600080fd5b506101db60025481565b34801561020b57600080fd5b5061019061021a366004610ba8565b61065c565b34801561022b57600080fd5b5060045461023f906001600160a01b031681565b6040516001600160a01b03909116815260200161019c565b34801561026357600080fd5b50610190610272366004610ad5565b60066020526000908152604090205460ff1681565b34801561029357600080fd5b506101db60015481565b3480156102a957600080fd5b5060075461023f906001600160a01b031681565b3480156102c957600080fd5b506102dd6102d8366004610ad5565b6106f5565b60405161019c9493929190610c79565b3480156102f957600080fd5b506101db60005481565b6004546001600160a01b031633146103625760405162461bcd60e51b815260206004820152601260248201527f6f6e6c79206f776e657220616c6c6f776564000000000000000000000000000060448201526064015b60405180910390fd5b3360009081526006602052604090205460ff166103b45760405162461bcd60e51b815260206004820152601060248201526f1b9bdd081dda1a5d19481b1a5cdd195960821b6044820152606401610359565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b3360009081526006602052604090205460ff1661042a5760405162461bcd60e51b815260206004820152601060248201526f1b9bdd081dda1a5d19481b1a5cdd195960821b6044820152606401610359565b600754600090610442906001600160a01b03166108b5565b6040516001600160a01b03821681529091507f5f7924690bfd8b5c2394fa97ce2ef2a089ac2d7db4d7d34c0b74b35f79380f0f9060200160405180910390a150565b3460025411158061049757503460015411155b806104a457503460005411155b6104f05760405162461bcd60e51b815260206004820152601060248201527f6e6f7420656e6f756768206574686572000000000000000000000000000000006044820152606401610359565b6104fc8484848461065c565b5050505050565b6004546001600160a01b0316331461055d5760405162461bcd60e51b815260206004820152601260248201527f6f6e6c79206f776e657220616c6c6f77656400000000000000000000000000006044820152606401610359565b3360009081526006602052604090205460ff166105af5760405162461bcd60e51b815260206004820152601060248201526f1b9bdd081dda1a5d19481b1a5cdd195960821b6044820152606401610359565b6001600160a01b03166000908152600660205260409020805460ff19169055565b3360009081526006602052604090205460ff166106225760405162461bcd60e51b815260206004820152601060248201526f1b9bdd081dda1a5d19481b1a5cdd195960821b6044820152606401610359565b600780547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b3360009081526005602090815260408220865161067b92880190610a3c565b5033600090815260056020908152604090912085516106a292600190920191870190610a3c565b503360009081526005602052604090206002018390556106c18261091e565b33600090815260056020908152604090912082516106e9936003909201929190910190610a3c565b50600195945050505050565b60056020526000908152604090208054819061071090610cc3565b80601f016020809104026020016040519081016040528092919081815260200182805461073c90610cc3565b80156107895780601f1061075e57610100808354040283529160200191610789565b820191906000526020600020905b81548152906001019060200180831161076c57829003601f168201915b50505050509080600101805461079e90610cc3565b80601f01602080910402602001604051908101604052809291908181526020018280546107ca90610cc3565b80156108175780601f106107ec57610100808354040283529160200191610817565b820191906000526020600020905b8154815290600101906020018083116107fa57829003601f168201915b50505050509080600201549080600301805461083290610cc3565b80601f016020809104026020016040519081016040528092919081815260200182805461085e90610cc3565b80156108ab5780601f10610880576101008083540402835291602001916108ab565b820191906000526020600020905b81548152906001019060200180831161088e57829003601f168201915b5050505050905084565b6000808260601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f0949350505050565b6060600282600281111561093457610934610cfe565b60ff16111561094257600080fd5b81600281111561095457610954610cfe565b61099157505060408051808201909152600581527f6669727374000000000000000000000000000000000000000000000000000000602082015290565b8160028111156109a3576109a3610cfe565b600114156109e457505060408051808201909152600881527f627573696e657373000000000000000000000000000000000000000000000000602082015290565b8160028111156109f6576109f6610cfe565b60021415610a3757505060408051808201909152600781527f65636f6e6f6d7900000000000000000000000000000000000000000000000000602082015290565b919050565b828054610a4890610cc3565b90600052602060002090601f016020900481019282610a6a5760008555610ab0565b82601f10610a8357805160ff1916838001178555610ab0565b82800160010185558215610ab0579182015b82811115610ab0578251825591602001919060010190610a95565b50610abc929150610ac0565b5090565b5b80821115610abc5760008155600101610ac1565b600060208284031215610ae757600080fd5b81356001600160a01b0381168114610afe57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610b2c57600080fd5b813567ffffffffffffffff80821115610b4757610b47610b05565b604051601f8301601f19908116603f01168101908282118183101715610b6f57610b6f610b05565b81604052838152866020858801011115610b8857600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215610bbe57600080fd5b843567ffffffffffffffff80821115610bd657600080fd5b610be288838901610b1b565b95506020870135915080821115610bf857600080fd5b50610c0587828801610b1b565b93505060408501359150606085013560038110610c2157600080fd5b939692955090935050565b6000815180845260005b81811015610c5257602081850181015186830182015201610c36565b81811115610c64576000602083870101525b50601f01601f19169290920160200192915050565b608081526000610c8c6080830187610c2c565b8281036020840152610c9e8187610c2c565b90508460408401528281036060840152610cb88185610c2c565b979650505050505050565b600181811c90821680610cd757607f821691505b60208210811415610cf857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052602160045260246000fdfea164736f6c634300080c000a";

type AirlineTicketFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AirlineTicketFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AirlineTicketFactory__factory extends ContractFactory {
  constructor(...args: AirlineTicketFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AirlineTicketFactory";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AirlineTicketFactory> {
    return super.deploy(overrides || {}) as Promise<AirlineTicketFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AirlineTicketFactory {
    return super.attach(address) as AirlineTicketFactory;
  }
  connect(signer: Signer): AirlineTicketFactory__factory {
    return super.connect(signer) as AirlineTicketFactory__factory;
  }
  static readonly contractName: "AirlineTicketFactory";
  public readonly contractName: "AirlineTicketFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AirlineTicketFactoryInterface {
    return new utils.Interface(_abi) as AirlineTicketFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AirlineTicketFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AirlineTicketFactory;
  }
}
