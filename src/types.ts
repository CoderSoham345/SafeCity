export interface Persona {
  id: string;
  name: string;
  role: string;
  age: number;
  location: string;
  bio: string;
  goals: string[];
  painPoints: string[];
  techSavviness: 'High' | 'Medium' | 'Low';
}

export interface UserStory {
  id: string;
  epic: string;
  title: string;
  asA: string;
  iWant: string;
  soThat: string;
  acceptanceCriteria: string[];
  priority: 'High' | 'Medium' | 'Low';
}

export interface FeatureModule {
  id: string;
  title: string;
  iconName: string;
  description: string;
  capabilities: string[];
  techStack: string[];
}

export interface DatabaseCollection {
  name: string;
  description: string;
  fields: { name: string; type: string; description: string }[];
  securityRulesSummary: string;
}

export interface FolderNode {
  name: string;
  type: 'folder' | 'file';
  description?: string;
  children?: FolderNode[];
}

export interface RoadmapPhase {
  phase: number;
  title: string;
  duration: string;
  deliverables: string[];
  status: 'Completed' | 'In Progress' | 'Pending Approval';
}
