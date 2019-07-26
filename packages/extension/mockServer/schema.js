import {
    gql,
} from 'apollo-server';
import BigInt from 'apollo-type-bigint';
import {
    getAssetById,
} from './database/asset';
import {
    getAccount,
    getAccountById,
    getAccounts,
} from './database/account';
import {
    getNotes,
    getNoteById,
} from './database/note';
import {
    getNoteAccess,
    getNoteAccesses,
    getNoteAccessById,
    getNoteChangeLogs,
    grantAccess,
} from './database/noteAccess';

export const typeDefs = gql`
    scalar BigInt
    type Account {
        id: ID!
        address: String!
        publicKey: String
        publicKeyCurve25519: String
    }
    type Asset {
        id: ID!
        address: String!
    }
    type Note {
        id: ID!
        hash: String!
        asset: Asset!
        owner: Account!
        metadata: String!
        status: String!
    }
    type NoteAccess {
        id: ID!
        note: Note!
        account: Account!
        viewingKey: String!
        timestamp: BigInt!
    }
    type NoteChangeLog {
        id: ID!
        account: Account!
        noteAccess: NoteAccess!
        action: String!
        timestamp: BigInt!
    }
    input Account_filter {
        id: ID
        id_in: [ID!]
        id_not_in: [ID!]
        address: String
        address_in: [String!]
        address_not_in: [String!]
    }
    input Note_filter {
        id: ID
        id_in: [ID!]
        id_not_in: [ID!]
    }
    input NoteAccess_filter {
        id: ID
        id_lt: ID
        id_gt: ID
        note: ID
        note_in: [ID!]
        note_not_in: [ID!]
        account: ID
        account_in: [ID!]
        account_not_in: [ID!]
        timestamp: BigInt
        timestamp_lt: BigInt
        timestamp_lte: BigInt
        timestamp_gte: BigInt
    }
    input NoteChangeLog_filter {
        id: ID
        id_lt: ID
        id_gt: ID
        account: ID
    }
    type Query {
        account(id: ID!): Account
        accounts(first: Int!, where: Account_filter, orderBy: String): [Account!]
        note(id: ID!): Note
        notes(first: Int!, where: Note_filter, orderBy: String): [Note!]
        noteAccess(id: ID, noteId: ID, account: ID): NoteAccess
        noteAccesses(first: Int!, where: NoteAccess_filter, orderBy: String): [NoteAccess!]
        noteChangeLogs(first: Int!, where: NoteChangeLog_filter, orderBy: String): [NoteChangeLog!]
    }
    type Mutation {
        updateNoteMetaData(_noteHash: String!, _metadata: String!): Boolean
    }
`;

export const resolvers = {
    BigInt: new BigInt('safe'),
    Query: {
        account: getAccount,
        accounts: getAccounts,
        note: (_, { id }) => getNoteById(id),
        notes: getNotes,
        noteAccess: getNoteAccess,
        noteAccesses: getNoteAccesses,
        noteChangeLogs: getNoteChangeLogs,
    },
    Note: {
        asset: ({ asset }) => getAssetById(asset),
        owner: ({ owner }) => getAccountById(owner),
    },
    NoteAccess: {
        note: ({ note }) => getNoteById(note),
        account: ({ account }) => getAccountById(account),
    },
    NoteChangeLog: {
        account: ({ account }) => getAccountById(account),
        noteAccess: ({ noteAccess }) => getNoteAccessById(noteAccess),
    },
    Mutation: {
        updateNoteMetaData: (_, {
            _noteHash,
            _metadata,
        }) => grantAccess(_noteHash, _metadata),
    },
};