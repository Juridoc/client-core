/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Field entity class.
 */
@RestDB.Schema.Entity('field')
@Class.Describe()
export class Field extends Class.Null {
  /**
   * Field type.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public type?: string;

  /**
   * Field value.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public value!: string;

  /**
   * Field label.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public label?: string;

  /**
   * Get the field label or value.
   */
  @Class.Public()
  public toString(): string {
    return this.label ?? this.value;
  }
}
