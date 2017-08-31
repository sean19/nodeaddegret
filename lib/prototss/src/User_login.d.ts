import * as $protobuf from "protobufjs";

/** Properties of a User_login. */
export interface IUser_login {

    /** User_login userId */
    userId: number;

    /** User_login userName */
    userName: string;
}

/** Represents a User_login. */
export class User_login {

    /**
     * Constructs a new User_login.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUser_login);

    /** User_login userId. */
    public userId: number;

    /** User_login userName. */
    public userName: string;

    /**
     * Creates a new User_login instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User_login instance
     */
    public static create(properties?: IUser_login): User_login;

    /**
     * Encodes the specified User_login message. Does not implicitly {@link User_login.verify|verify} messages.
     * @param message User_login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUser_login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified User_login message, length delimited. Does not implicitly {@link User_login.verify|verify} messages.
     * @param message User_login message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUser_login, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a User_login message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): User_login;

    /**
     * Decodes a User_login message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns User_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): User_login;

    /**
     * Verifies a User_login message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a User_login message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns User_login
     */
    public static fromObject(object: { [k: string]: any }): User_login;

    /**
     * Creates a plain object from a User_login message. Also converts values to other types if specified.
     * @param message User_login
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: User_login, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this User_login to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
