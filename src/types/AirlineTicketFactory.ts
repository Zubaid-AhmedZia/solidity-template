/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AirlineTicketFactoryInterface extends utils.Interface {
  contractName: "AirlineTicketFactory";
  functions: {
    "BusinessClassPrice()": FunctionFragment;
    "EconomyClassPrice()": FunctionFragment;
    "FirstClassPrice()": FunctionFragment;
    "add(address)": FunctionFragment;
    "createTicket()": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "libraryAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "passenger(address)": FunctionFragment;
    "passengerData(string,string,uint256,uint8)": FunctionFragment;
    "receiveEther(string,string,uint256,uint8)": FunctionFragment;
    "remaining()": FunctionFragment;
    "remove(address)": FunctionFragment;
    "setLibraryAddress(address)": FunctionFragment;
    "whiteListAddresses(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BusinessClassPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EconomyClassPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FirstClassPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "add", values: [string]): string;
  encodeFunctionData(
    functionFragment: "createTicket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "libraryAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "passenger", values: [string]): string;
  encodeFunctionData(
    functionFragment: "passengerData",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveEther",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "remaining", values?: undefined): string;
  encodeFunctionData(functionFragment: "remove", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setLibraryAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "whiteListAddresses",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "BusinessClassPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EconomyClassPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FirstClassPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "libraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "passenger", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "passengerData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remaining", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whiteListAddresses",
    data: BytesLike
  ): Result;

  events: {
    "ticketCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ticketCreated"): EventFragment;
}

export type ticketCreatedEvent = TypedEvent<[string], { newTicket: string }>;

export type ticketCreatedEventFilter = TypedEventFilter<ticketCreatedEvent>;

export interface AirlineTicketFactory extends BaseContract {
  contractName: "AirlineTicketFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AirlineTicketFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BusinessClassPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    EconomyClassPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    FirstClassPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    add(
      _whiteListAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createTicket(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    libraryAddress(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    passenger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string] & {
        name: string;
        destination: string;
        passportID: BigNumber;
        class: string;
      }
    >;

    passengerData(
      _name: string,
      _destination: string,
      _passportID: BigNumberish,
      _class: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    receiveEther(
      _name: string,
      _destination: string,
      _passportID: BigNumberish,
      _class: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remaining(overrides?: CallOverrides): Promise<[BigNumber]>;

    remove(
      _whiteListAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLibraryAddress(
      _libraryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whiteListAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  BusinessClassPrice(overrides?: CallOverrides): Promise<BigNumber>;

  EconomyClassPrice(overrides?: CallOverrides): Promise<BigNumber>;

  FirstClassPrice(overrides?: CallOverrides): Promise<BigNumber>;

  add(
    _whiteListAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createTicket(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isWhitelisted(_address: string, overrides?: CallOverrides): Promise<boolean>;

  libraryAddress(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  passenger(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, string] & {
      name: string;
      destination: string;
      passportID: BigNumber;
      class: string;
    }
  >;

  passengerData(
    _name: string,
    _destination: string,
    _passportID: BigNumberish,
    _class: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  receiveEther(
    _name: string,
    _destination: string,
    _passportID: BigNumberish,
    _class: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remaining(overrides?: CallOverrides): Promise<BigNumber>;

  remove(
    _whiteListAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLibraryAddress(
    _libraryAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whiteListAddresses(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    BusinessClassPrice(overrides?: CallOverrides): Promise<BigNumber>;

    EconomyClassPrice(overrides?: CallOverrides): Promise<BigNumber>;

    FirstClassPrice(overrides?: CallOverrides): Promise<BigNumber>;

    add(_whiteListAddress: string, overrides?: CallOverrides): Promise<void>;

    createTicket(overrides?: CallOverrides): Promise<void>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    libraryAddress(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    passenger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string] & {
        name: string;
        destination: string;
        passportID: BigNumber;
        class: string;
      }
    >;

    passengerData(
      _name: string,
      _destination: string,
      _passportID: BigNumberish,
      _class: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiveEther(
      _name: string,
      _destination: string,
      _passportID: BigNumberish,
      _class: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    remaining(overrides?: CallOverrides): Promise<BigNumber>;

    remove(_whiteListAddress: string, overrides?: CallOverrides): Promise<void>;

    setLibraryAddress(
      _libraryAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    whiteListAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ticketCreated(address)"(newTicket?: null): ticketCreatedEventFilter;
    ticketCreated(newTicket?: null): ticketCreatedEventFilter;
  };

  estimateGas: {
    BusinessClassPrice(overrides?: CallOverrides): Promise<BigNumber>;

    EconomyClassPrice(overrides?: CallOverrides): Promise<BigNumber>;

    FirstClassPrice(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      _whiteListAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createTicket(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    libraryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    passenger(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    passengerData(
      _name: string,
      _destination: string,
      _passportID: BigNumberish,
      _class: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    receiveEther(
      _name: string,
      _destination: string,
      _passportID: BigNumberish,
      _class: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remaining(overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      _whiteListAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLibraryAddress(
      _libraryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whiteListAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BusinessClassPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    EconomyClassPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FirstClassPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add(
      _whiteListAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createTicket(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isWhitelisted(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    libraryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    passenger(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    passengerData(
      _name: string,
      _destination: string,
      _passportID: BigNumberish,
      _class: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    receiveEther(
      _name: string,
      _destination: string,
      _passportID: BigNumberish,
      _class: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remaining(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    remove(
      _whiteListAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLibraryAddress(
      _libraryAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whiteListAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
