import * as $protobuf from "protobufjs";

/** Properties of a user_login. */
export interface Iuser_login {

    /** user_login name */
    name: string;

    /** user_login pass */
    pass: string;
}

/** Represents a user_login. */
export class user_login {

    /**
     * Constructs a new user_login.
     * @param [properties] Properties to set
     */
    constructor(properties?: Iuser_login);

    /** user_login name. */
    public name: string;

    /** user_login pass. */
    public pass: string;

    /**
     * Creates a new user_login instance using the specified properties.
     * @param [properties] Properties to set
     * @returns user_login instance
     */
    public static create(properties?: Iuser_login): user_login;

    /**
     * Encodes the specified user_login message. Does not implicitly {@link user_login.verify|verify} messages.
     * @param message user_login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Iuser_login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified user_login message, length delimited. Does not implicitly {@link user_login.verify|verify} messages.
     * @param message user_login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Iuser_login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a user_login message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns user_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user_login;

    /**
     * Decodes a user_login message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns user_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user_login;

    /**
     * Verifies a user_login message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a user_login message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns user_login
     */
    public static fromObject(object: { [k: string]: any }): user_login;

    /**
     * Creates a plain object from a user_login message. Also converts values to other types if specified.
     * @param message user_login
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: user_login, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this user_login to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a login_info. */
export interface Ilogin_info {

    /** login_info result */
    result: string;

    /** login_info accountId */
    accountId: string;

    /** login_info userName */
    userName: string;

    /** login_info companyName */
    companyName: string;
}

/** Represents a login_info. */
export class login_info {

    /**
     * Constructs a new login_info.
     * @param [properties] Properties to set
     */
    constructor(properties?: Ilogin_info);

    /** login_info result. */
    public result: string;

    /** login_info accountId. */
    public accountId: string;

    /** login_info userName. */
    public userName: string;

    /** login_info companyName. */
    public companyName: string;

    /**
     * Creates a new login_info instance using the specified properties.
     * @param [properties] Properties to set
     * @returns login_info instance
     */
    public static create(properties?: Ilogin_info): login_info;

    /**
     * Encodes the specified login_info message. Does not implicitly {@link login_info.verify|verify} messages.
     * @param message login_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: Ilogin_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified login_info message, length delimited. Does not implicitly {@link login_info.verify|verify} messages.
     * @param message login_info message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: Ilogin_info, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a login_info message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns login_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login_info;

    /**
     * Decodes a login_info message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns login_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login_info;

    /**
     * Verifies a login_info message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a login_info message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns login_info
     */
    public static fromObject(object: { [k: string]: any }): login_info;

    /**
     * Creates a plain object from a login_info message. Also converts values to other types if specified.
     * @param message login_info
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: login_info, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this login_info to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
