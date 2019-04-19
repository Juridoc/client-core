/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Field entity class.
 */
export declare class Field extends Class.Null {
    /**
     * Field type.
     */
    type?: string;
    /**
     * Field value.
     */
    value: string;
    /**
     * Field label.
     */
    label?: string;
    /**
     * Get the field label or value.
     */
    toString(): string;
}
