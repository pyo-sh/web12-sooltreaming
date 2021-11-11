import { Schema, model } from 'mongoose';

export type UserType = {
  githubId: string;
  naverId: string;
  nickname: string;
  imgUrl: string;

  chatCount: number;
  hookCount: number;
  pollCount: number;
  closeupCount: number;
  dieCount: number;
  speakCount: number;
  starterCount: number;
  totalSeconds: number;

  title: Array<String>;

  sendFriend: Array<String>;
  receiveFriend: Array<String>;
  friend: Array<String>;
};

const userSchema = new Schema<UserType>(
  {
    // User
    githubId: String,
    naverId: String,
    nickname: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },

    // Statistic
    chatCount: {
      type: Number,
      default: 0,
    },
    hookCount: {
      type: Number,
      default: 0,
    },
    pollCount: {
      type: Number,
      default: 0,
    },
    closeupCount: {
      type: Number,
      default: 0,
    },
    dieCount: {
      type: Number,
      default: 0,
    },
    speakCount: {
      type: Number,
      default: 0,
    },
    starterCount: {
      type: Number,
      default: 0,
    },
    totalSeconds: {
      type: Number,
      default: 0,
    },

    // Title
    title: {
      type: [String],
      default: [],
    },

    // Friend
    sendFriend: {
      type: [String],
      default: [],
    },
    receiveFriend: {
      type: [String],
      default: [],
    },
    friend: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

export default model<UserType>('User', userSchema);