import { Optional, DataTypes, Model } from 'sequelize';
// import {PodcastAttributes} from '../types/db';
import { db } from '../db';

export interface PodcastAttributes {
  id?: number;
  name: string;
  description: string;
  source: string;
  audio: string;
  image: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

//For optional calls with User.Create()
export interface PodcastCreationAttributes
  extends Optional<PodcastAttributes, 'id'> {}

// We need to declare an interface for our model that is basically what our class would be
export interface PodcastInstance
  extends Model<PodcastAttributes, PodcastCreationAttributes>,
    PodcastAttributes {}

export const PodcastModel = db.define<PodcastInstance>('Podcast', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  audio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});
