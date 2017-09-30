/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.user_login = (function() {

    /**
     * Properties of a user_login.
     * @exports Iuser_login
     * @interface Iuser_login
     * @property {string} name user_login name
     * @property {string} pass user_login pass
     */

    /**
     * Constructs a new user_login.
     * @exports user_login
     * @classdesc Represents a user_login.
     * @constructor
     * @param {Iuser_login=} [properties] Properties to set
     */
    function user_login(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * user_login name.
     * @member {string}name
     * @memberof user_login
     * @instance
     */
    user_login.prototype.name = "";

    /**
     * user_login pass.
     * @member {string}pass
     * @memberof user_login
     * @instance
     */
    user_login.prototype.pass = "";

    /**
     * Creates a new user_login instance using the specified properties.
     * @function create
     * @memberof user_login
     * @static
     * @param {Iuser_login=} [properties] Properties to set
     * @returns {user_login} user_login instance
     */
    user_login.create = function create(properties) {
        return new user_login(properties);
    };

    /**
     * Encodes the specified user_login message. Does not implicitly {@link user_login.verify|verify} messages.
     * @function encode
     * @memberof user_login
     * @static
     * @param {Iuser_login} message user_login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    user_login.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.pass);
        return writer;
    };

    /**
     * Encodes the specified user_login message, length delimited. Does not implicitly {@link user_login.verify|verify} messages.
     * @function encodeDelimited
     * @memberof user_login
     * @static
     * @param {Iuser_login} message user_login message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    user_login.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a user_login message from the specified reader or buffer.
     * @function decode
     * @memberof user_login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {user_login} user_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    user_login.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user_login();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.pass = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
        if (!message.hasOwnProperty("pass"))
            throw $util.ProtocolError("missing required 'pass'", { instance: message });
        return message;
    };

    /**
     * Decodes a user_login message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof user_login
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {user_login} user_login
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    user_login.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a user_login message.
     * @function verify
     * @memberof user_login
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    user_login.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.name))
            return "name: string expected";
        if (!$util.isString(message.pass))
            return "pass: string expected";
        return null;
    };

    /**
     * Creates a user_login message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof user_login
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {user_login} user_login
     */
    user_login.fromObject = function fromObject(object) {
        if (object instanceof $root.user_login)
            return object;
        var message = new $root.user_login();
        if (object.name != null)
            message.name = String(object.name);
        if (object.pass != null)
            message.pass = String(object.pass);
        return message;
    };

    /**
     * Creates a plain object from a user_login message. Also converts values to other types if specified.
     * @function toObject
     * @memberof user_login
     * @static
     * @param {user_login} message user_login
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    user_login.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.pass = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.pass != null && message.hasOwnProperty("pass"))
            object.pass = message.pass;
        return object;
    };

    /**
     * Converts this user_login to JSON.
     * @function toJSON
     * @memberof user_login
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    user_login.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return user_login;
})();

$root.login_info = (function() {

    /**
     * Properties of a login_info.
     * @exports Ilogin_info
     * @interface Ilogin_info
     * @property {string} result login_info result
     * @property {string} accountId login_info accountId
     * @property {string} userName login_info userName
     * @property {string} companyName login_info companyName
     */

    /**
     * Constructs a new login_info.
     * @exports login_info
     * @classdesc Represents a login_info.
     * @constructor
     * @param {Ilogin_info=} [properties] Properties to set
     */
    function login_info(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * login_info result.
     * @member {string}result
     * @memberof login_info
     * @instance
     */
    login_info.prototype.result = "";

    /**
     * login_info accountId.
     * @member {string}accountId
     * @memberof login_info
     * @instance
     */
    login_info.prototype.accountId = "";

    /**
     * login_info userName.
     * @member {string}userName
     * @memberof login_info
     * @instance
     */
    login_info.prototype.userName = "";

    /**
     * login_info companyName.
     * @member {string}companyName
     * @memberof login_info
     * @instance
     */
    login_info.prototype.companyName = "";

    /**
     * Creates a new login_info instance using the specified properties.
     * @function create
     * @memberof login_info
     * @static
     * @param {Ilogin_info=} [properties] Properties to set
     * @returns {login_info} login_info instance
     */
    login_info.create = function create(properties) {
        return new login_info(properties);
    };

    /**
     * Encodes the specified login_info message. Does not implicitly {@link login_info.verify|verify} messages.
     * @function encode
     * @memberof login_info
     * @static
     * @param {Ilogin_info} message login_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    login_info.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.result);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message.accountId);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message.userName);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message.companyName);
        return writer;
    };

    /**
     * Encodes the specified login_info message, length delimited. Does not implicitly {@link login_info.verify|verify} messages.
     * @function encodeDelimited
     * @memberof login_info
     * @static
     * @param {Ilogin_info} message login_info message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    login_info.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a login_info message from the specified reader or buffer.
     * @function decode
     * @memberof login_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {login_info} login_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    login_info.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login_info();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.string();
                break;
            case 2:
                message.accountId = reader.string();
                break;
            case 3:
                message.userName = reader.string();
                break;
            case 4:
                message.companyName = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("result"))
            throw $util.ProtocolError("missing required 'result'", { instance: message });
        if (!message.hasOwnProperty("accountId"))
            throw $util.ProtocolError("missing required 'accountId'", { instance: message });
        if (!message.hasOwnProperty("userName"))
            throw $util.ProtocolError("missing required 'userName'", { instance: message });
        if (!message.hasOwnProperty("companyName"))
            throw $util.ProtocolError("missing required 'companyName'", { instance: message });
        return message;
    };

    /**
     * Decodes a login_info message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof login_info
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {login_info} login_info
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    login_info.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a login_info message.
     * @function verify
     * @memberof login_info
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    login_info.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.result))
            return "result: string expected";
        if (!$util.isString(message.accountId))
            return "accountId: string expected";
        if (!$util.isString(message.userName))
            return "userName: string expected";
        if (!$util.isString(message.companyName))
            return "companyName: string expected";
        return null;
    };

    /**
     * Creates a login_info message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof login_info
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {login_info} login_info
     */
    login_info.fromObject = function fromObject(object) {
        if (object instanceof $root.login_info)
            return object;
        var message = new $root.login_info();
        if (object.result != null)
            message.result = String(object.result);
        if (object.accountId != null)
            message.accountId = String(object.accountId);
        if (object.userName != null)
            message.userName = String(object.userName);
        if (object.companyName != null)
            message.companyName = String(object.companyName);
        return message;
    };

    /**
     * Creates a plain object from a login_info message. Also converts values to other types if specified.
     * @function toObject
     * @memberof login_info
     * @static
     * @param {login_info} message login_info
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    login_info.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = "";
            object.accountId = "";
            object.userName = "";
            object.companyName = "";
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.accountId != null && message.hasOwnProperty("accountId"))
            object.accountId = message.accountId;
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
        if (message.companyName != null && message.hasOwnProperty("companyName"))
            object.companyName = message.companyName;
        return object;
    };

    /**
     * Converts this login_info to JSON.
     * @function toJSON
     * @memberof login_info
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    login_info.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return login_info;
})();

module.exports = $root;
