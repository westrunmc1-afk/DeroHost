export type Role = 'OWNER' | 'ADMIN' | 'USER';

export type ServerStatus =
  | 'OFFLINE'
  | 'ONLINE'
  | 'STARTING'
  | 'STOPPING'
  | 'CRASHED'
  | 'INSTALLING'
  | 'SUSPENDED';

export type ServerSoftware =
  | 'PAPER'
  | 'SPIGOT'
  | 'FABRIC'
  | 'FORGE'
  | 'VELOCITY'
  | 'BUNGEECORD'
  | 'WATERFALL'
  | 'COSTOM';

export type BackupStatus = 'PENDING' | 'RUNNING' | 'COMPLETED' | 'FAILED';

export type NodeStatus = 'ONLINE' | 'OFFLINE' | 'MAINTENANCE';

export type LogLevel = 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS';

export interface Permission {
  key: string;
  name: string;
  description: string;
  category: string;
}

export interface ServerPermission {
  console: boolean;
  start: boolean;
  stop: boolean;
  restart: boolean;
  kill: boolean;
  filesRead: boolean;
  filesWrite: boolean;
  filesDelete: boolean;
  filesUpload: boolean;
  filesDownload: boolean;
  plugins: boolean;
  backups: boolean;
  settings: boolean;
  subusers: boolean;
  startup: boolean;
}

export interface NodeInfo {
  id: string;
  name: string;
  uuid: string;
  ip: string;
  port: number;
  status: NodeStatus;
  ram: number;
  disk: number;
  cpu: string;
  location: string;
  ramUsage: number;
  diskUsage: number;
  cpuUsage: number;
  serverCount: number;
}

export interface ServerInfo {
  id: string;
  uuid: string;
  name: string;
  status: ServerStatus;
  nodeId: string;
  port: number;
  ram: number;
  disk: number;
  cpu: number;
  software: ServerSoftware;
  minecraftVersion: string;
  startupCommand: string;
  env?: Record<string, string>;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BackupInfo {
  id: string;
  uuid: string;
  name: string;
  filename: string;
  size?: number;
  status: BackupStatus;
  createdAt: Date;
  createdBy: string;
}

export interface FileInfo {
  name: string;
  path: string;
  size: number;
  isDirectory: boolean;
  modified: Date;
  mode?: string;
}

export interface ModrinthProject {
  project_id: string;
  slug: string;
  name: string;
  description: string;
  downloads: number;
  follows: number;
  icon_url?: string;
  date_published: string;
  client_side: string;
  server_side: string;
  categories: string[];
  loaders?: Array<{id: string; name: string}>;
}

export interface ModrinthVersion {
  version_id: string;
  project_id: string;
  name: string;
  version_number: string;
  download_url: string;
  file_name: string;
  sha512: string;
  primary: boolean;
  dependencies: Record<string, string>;
  date_published: string;
}

export interface WebSocketMessage {
  type: string;
  payload?: unknown;
  channel?: string;
}

export interface ConsoleOutput {
  line: string;
  timestamp: Date;
  source: 'stdout' | 'stderr';
}

export interface ResourceStats {
  cpu: number;
  ram: number;
  ramTotal: number;
  disk: number;
  diskTotal: number;
  networkRx: number;
  networkTx: number;
}

export interface InstallProgress {
  step: string;
  progress: number;
  message: string;
  error?: string;
}
