/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";
var $protobuf = require("protobufjs/minimal");
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.User_login = (function () {
    /**
     * Properties of a User_login.
     * @exports IUser_login
     * @interface IUser_login
     * @property {number} userId User_login userId
     * @property {string} userName User_login userName
     */
    /**
     * Constructs a new User_login.
     * @exports User_login
     * @classdesc Represents a User_login.
     * @constructor
     * @param {IUser_login=} [properties] Properties to set
     */
    function User_login(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * User_login userId.
     * @member {number}userId
     * @memberof User_login
     * @instance
     */
    User_login.prototype.userId = 0;
    /**
     * User_login userName.
     * @member {string}userName
     * @memberof User_login
     * @instance
     */
    User_login.prototype.userName = "";
    /**
     * Creates a new User_login instance using the specified properties.
     * @function create
     * @memberof User_login
     * @static
     * @param {IUser_login=} [properties] Properties to set
     * @returns {User_login} User_login instance
     */
    User_login.create = function create(properties) {
        return new User_login(properties);
    };
    /**
     * Encodes the specified User_login message. Does not implicitly {@link User_login.verify|verify} messages.
     * @function encode
     * @memberof User_login
     * @static
     * @param {IUser_login} message User_login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User_login.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.userId);
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.userName);
        return writer;
    };
    /**
     * Encodes the specified User_login message, length delimited. Does not implicitly {@link User_login.verify|verify} messages.
     * @function encodeDelimited
     * @memberof User_login
     * @static
     * @param {IUser_login} message User_login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User_login.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes a User_login message from the specified reader or buffer.
     * @function decode
     * @memberof User_login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {User_login} User_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User_login.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.User_login();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        if (!message.hasOwnProperty("userId"))
            throw $util.ProtocolError("missing required 'userId'", { instance: message });
        if (!message.hasOwnProperty("userName"))
            throw $util.ProtocolError("missing required 'userName'", { instance: message });
        return message;
    };
    /**
     * Decodes a User_login message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof User_login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {User_login} User_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User_login.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies a User_login message.
     * @function verify
     * @memberof User_login
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    User_login.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isInteger(message.userId))
            return "userId: integer expected";
        if (!$util.isString(message.userName))
            return "userName: string expected";
        return null;
    };
    /**
     * Creates a User_login message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof User_login
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {User_login} User_login
     */
    User_login.fromObject = function fromObject(object) {
        if (object instanceof $root.User_login)
            return object;
        var message = new $root.User_login();
        if (object.userId != null)
            message.userId = object.userId | 0;
        if (object.userName != null)
            message.userName = String(object.userName);
        return message;
    };
    /**
     * Creates a plain object from a User_login message. Also converts values to other types if specified.
     * @function toObject
     * @memberof User_login
     * @static
     * @param {User_login} message User_login
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    User_login.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = 0;
            object.userName = "";
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
        return object;
    };
    /**
     * Converts this User_login to JSON.
     * @function toJSON
     * @memberof User_login
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    User_login.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    return User_login;
})();
module.exports = $root;
