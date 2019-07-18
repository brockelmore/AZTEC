// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Asset extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Asset entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Asset entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Asset", id.toString(), this);
  }

  static load(id: string): Asset | null {
    return store.get("Asset", id) as Asset | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get linkedTokenAddress(): Bytes {
    let value = this.get("linkedTokenAddress");
    return value.toBytes();
  }

  set linkedTokenAddress(value: Bytes) {
    this.set("linkedTokenAddress", Value.fromBytes(value));
  }

  get scalingFactor(): BigInt {
    let value = this.get("scalingFactor");
    return value.toBigInt();
  }

  set scalingFactor(value: BigInt) {
    this.set("scalingFactor", Value.fromBigInt(value));
  }

  get canAdjustSupply(): boolean {
    let value = this.get("canAdjustSupply");
    return value.toBoolean();
  }

  set canAdjustSupply(value: boolean) {
    this.set("canAdjustSupply", Value.fromBoolean(value));
  }

  get canConvert(): boolean {
    let value = this.get("canConvert");
    return value.toBoolean();
  }

  set canConvert(value: boolean) {
    this.set("canConvert", Value.fromBoolean(value));
  }
}

export class Note extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Note entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Note entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Note", id.toString(), this);
  }

  static load(id: string): Note | null {
    return store.get("Note", id) as Note | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asset(): string {
    let value = this.get("asset");
    return value.toString();
  }

  set asset(value: string) {
    this.set("asset", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get metadata(): Bytes {
    let value = this.get("metadata");
    return value.toBytes();
  }

  set metadata(value: Bytes) {
    this.set("metadata", Value.fromBytes(value));
  }

  get access(): Array<string> | null {
    let value = this.get("access");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set access(value: Array<string> | null) {
    if (value === null) {
      this.unset("access");
    } else {
      this.set("access", Value.fromStringArray(value as Array<string>));
    }
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class NoteAccess extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NoteAccess entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NoteAccess entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NoteAccess", id.toString(), this);
  }

  static load(id: string): NoteAccess | null {
    return store.get("NoteAccess", id) as NoteAccess | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get note(): string {
    let value = this.get("note");
    return value.toString();
  }

  set note(value: string) {
    this.set("note", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get viewingKey(): Bytes {
    let value = this.get("viewingKey");
    return value.toBytes();
  }

  set viewingKey(value: Bytes) {
    this.set("viewingKey", Value.fromBytes(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}
