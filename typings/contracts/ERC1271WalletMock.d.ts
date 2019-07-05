/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ERC1271WalletMockInterface extends Interface {
  functions: {
    setShouldReject: TypedFunctionDescription<{
      encode([_value]: [boolean]): string;
    }>;
  };

  events: {};
}

export class ERC1271WalletMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ERC1271WalletMock;
  attach(addressOrName: string): ERC1271WalletMock;
  deployed(): Promise<ERC1271WalletMock>;

  on(event: EventFilter | string, listener: Listener): ERC1271WalletMock;
  once(event: EventFilter | string, listener: Listener): ERC1271WalletMock;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ERC1271WalletMock;
  removeAllListeners(eventName: EventFilter | string): ERC1271WalletMock;
  removeListener(eventName: any, listener: Listener): ERC1271WalletMock;

  interface: ERC1271WalletMockInterface;

  functions: {
    isValidSignature(_hash: Arrayish, _signature: Arrayish): Promise<string>;

    setShouldReject(
      _value: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    ERC1271_MAGIC_VAL(): Promise<string>;
    shouldReject(): Promise<boolean>;
    ERC1271_INVALID(): Promise<string>;
  };

  filters: {};

  estimate: {
    setShouldReject(_value: boolean): Promise<BigNumber>;
  };
}
