import { Persona, UserStory, FeatureModule, DatabaseCollection, FolderNode, RoadmapPhase } from '../types';

export const phase1Prd = {
  appName: "SafeCity Mumbai AI",
  tagline: "AI-Powered Smart Civic Reporting & Emergency Response Platform",
  version: "1.0.0-phase1",
  targetAudience: "12.5M+ Mumbai Residents, BMC Ward Officers, Mumbai Police, Disaster Management Cell, Emergency First Responders",
  executiveSummary: "SafeCity Mumbai AI is an advanced, enterprise-grade civic technology platform engineered for the Mumbai Metropolitan Region. It bridges the gap between citizens and municipal authorities (BMC, Police, Fire Brigade, Disaster Management) by combining state-of-the-art Android native architecture (Jetpack Compose, Clean Architecture, Hilt) with generative artificial intelligence (Gemini API & ML Kit) and real-time geospatial intelligence (Google Maps SDK & Location Services).",
  coreObjectives: [
    "Sub-second emergency access and one-tap SOS dispatch for police, fire, ambulance, and disaster response.",
    "AI-assisted civic grievance reporting with auto-classification, severity prediction, and duplicate detection via Gemini API.",
    "Comprehensive Women's Safety suite with live GPS sharing, safe route navigation, and night-time hazard alerts.",
    "Real-time disaster management feeds for monsoon flooding, cyclone warnings, and emergency shelter locations.",
    "Accountable, transparent authority dashboards with ward-wise heatmaps, team assignment, and SLA tracking."
  ]
};

export const phase1Features: FeatureModule[] = [
  {
    id: "emergency",
    title: "Emergency Services Integration",
    iconName: "ShieldAlert",
    description: "Instant one-touch access to Mumbai's primary emergency helplines and nearby emergency infrastructure.",
    capabilities: [
      "One-touch calling for Police (112/100), Fire (101), Ambulance (108), Women (1091), Child (1098), Disaster (1916), Citizen Helpline (155300).",
      "Interactive Google Maps displaying nearby Police Stations, Fire Stations, Hospitals, and BMC Ward Offices.",
      "Instant offline-first emergency directory cached via Room Database."
    ],
    techStack: ["TelecomManager Intent API", "Google Maps SDK", "Room DB", "Jetpack Compose"]
  },
  {
    id: "ai_reporter",
    title: "AI Civic Complaint System",
    iconName: "Sparkles",
    description: "Multimedia grievance reporting powered by Gemini AI for automated triage and routing.",
    capabilities: [
      "Photo capture via CameraX with ML Kit device-side compression and EXIF GPS tagging.",
      "Voice description recording with speech-to-text transcription.",
      "Gemini AI automatic issue classification (Potholes, Garbage, Water Leakage, Open Manholes, Fallen Trees, Flooding, etc.).",
      "Automated severity scoring (Low, Medium, High, Critical) and urgency prediction.",
      "Smart duplicate detection checking active nearby reports within 50 meters."
    ],
    techStack: ["CameraX", "Gemini 2.5 Flash API", "ML Kit", "FusedLocationProviderClient", "Firestore Geoqueries"]
  },
  {
    id: "sos",
    title: "Emergency SOS & Live Tracking",
    iconName: "Radio",
    description: "Life-saving emergency broadcast system for critical distress situations.",
    capabilities: [
      "One-tap physical power button trigger or in-app big red SOS button.",
      "Broadcasts live GPS coordinates via SMS and Firebase Cloud Messaging to emergency contacts.",
      "Automatic recording of 30-second audio clip and front camera snapshot.",
      "Live tracking session link generated for police control room."
    ],
    techStack: ["Foreground Services", "SMSManager", "FusedLocationProvider", "FCM"]
  },
  {
    id: "women_safety",
    title: "Women's Safety Suite",
    iconName: "HeartPulse",
    description: "Dedicated protective toolkit designed specifically for women's security across Mumbai.",
    capabilities: [
      "Safe Route Navigation factoring in street lighting density, police patrol frequency, and crowd presence.",
      "Night Mode Safety Alerts triggering automated check-ins when traveling late.",
      "Discreet shake-to-activate SOS mode.",
      "Verified safe shelter and women helpline quick-dial."
    ],
    techStack: ["Google Maps Directions API", "Sensors API", "EncryptedSharedPreferences"]
  },
  {
    id: "disaster",
    title: "Disaster Management & Monsoons",
    iconName: "CloudRain",
    description: "Real-time weather monitoring and disaster alerts for Mumbai's extreme monsoon seasons.",
    capabilities: [
      "Live flood alerts, heavy rain warnings, cyclone notices, and earthquake updates.",
      "Interactive flood zone heatmaps highlighting waterlogging-prone junctions (Hindmata, Milan Subway, Sion).",
      "Emergency shelter locator with capacity status and evacuation route guidance."
    ],
    techStack: ["WorkManager (Background Sync)", "Firebase Cloud Messaging", "Google Maps Polylines & Heatmaps"]
  },
  {
    id: "community",
    title: "Community & Gamification",
    iconName: "Users",
    description: "Crowdsourced civic engagement platform fostering active citizen participation.",
    capabilities: [
      "Community reports feed with upvoting/importance voting and comment threads.",
      "Citizen reward system with civic badge unlocks (e.g., 'Ward Guardian', 'Pothole Patrol').",
      "Monthly leaderboard recognizing top civic contributors.",
      "Volunteer program registration for local cleanups and disaster drills."
    ],
    techStack: ["Firestore Pagination", "Jetpack Paging 3", "Cloud Functions"]
  },
  {
    id: "authority",
    title: "Authority Dashboard & Admin",
    iconName: "LayoutDashboard",
    description: "Dedicated command center portal for BMC, Police, and Municipal officials.",
    capabilities: [
      "Secure role-based authentication (Admin, Ward Officer, Field Crew).",
      "Ward-wise complaint heatmaps and resolution analytics.",
      "Team dispatch, status updates (Submitted -> Assigned -> In Progress -> Resolved), and SLA timers.",
      "Automated department routing suggested by Gemini AI."
    ],
    techStack: ["Firebase Auth Custom Claims", "Charts (MPAndroidChart)", "Firestore Realtime Listeners"]
  }
];

export const phase1Personas: Persona[] = [
  {
    id: "p1",
    name: "Aarav Deshmukh",
    role: "IT Professional & Daily Commuter",
    age: 32,
    location: "Andheri West, Mumbai",
    bio: "Commutes daily via Western Express Highway. Frustrated by recurring potholes, waterlogging during monsoons, and unaddressed garbage dumping.",
    goals: ["Report civic hazards in under 30 seconds during commute", "Get real-time updates on when reported potholes are fixed", "Check safe, flood-free routes during heavy rains"],
    painPoints: ["Previous civic apps required cumbersome registration and endless form fields", "Never knew if complaints reached the right ward office"],
    techSavviness: "High"
  },
  {
    id: "p2",
    name: "Sunita Shinde",
    role: "School Teacher & Resident Welfare Association Lead",
    age: 45,
    location: "Dadar East, Mumbai",
    bio: "Active community member who advocates for street safety, senior citizen welfare, and school zone cleanliness in Dadar.",
    goals: ["Use Women Safety SOS when walking back from evening tuitions", "Coordinate community cleanups and track ward resolution metrics"],
    painPoints: ["Fear of walking through dimly lit market lanes late at night", "Lack of direct communication channels with BMC H-Ward officials"],
    techSavviness: "Medium"
  },
  {
    id: "p3",
    name: "Rajesh Kadam",
    role: "BMC Ward Officer (K-West Ward)",
    age: 48,
    location: "Bandra, Mumbai",
    bio: "Responsible for managing infrastructure maintenance, sanitation dispatch, and disaster response for over 450,000 residents.",
    goals: ["Receive pre-triaged, AI-verified civic complaints with exact GPS coordinates and photo evidence", "Efficiently assign field teams and meet SLA targets"],
    painPoints: ["Incomplete citizen reports lacking location accuracy", "Spam complaints and duplicate submissions clogging work queues"],
    techSavviness: "Medium"
  }
];

export const phase1UserStories: UserStory[] = [
  {
    id: "US-001",
    epic: "Emergency Services",
    title: "One-Touch Emergency Calling",
    asA: "Mumbai resident in distress",
    iWant: "to instantly place a direct call to Police, Ambulance, or Disaster Management with a single tap",
    soThat: "I can save critical seconds during life-threatening emergencies without dialing manually.",
    acceptanceCriteria: [
      "Emergency screen displays prominent tiles for Police (112), Fire (101), Ambulance (108), and Disaster (1916).",
      "Tapping a tile triggers Android's ACTION_DIAL intent immediately.",
      "Offline fallback displays numbers even without cellular data."
    ],
    priority: "High"
  },
  {
    id: "US-002",
    epic: "AI Civic Complaint",
    title: "AI-Powered Photo & Voice Reporting",
    asA: "Citizen reporting a broken water pipe",
    iWant: "to snap a photo and speak a quick description while the app automatically classifies the issue and detects location",
    soThat: "I don't have to fill out complex forms or select correct municipal departments manually.",
    acceptanceCriteria: [
      "CameraX captures image with embedded FusedLocation coordinates.",
      "Gemini AI analyzes image & voice text to return category ('Water Leakage'), severity ('High'), and target department ('BMC Hydraulic Dept').",
      "Duplicate detector flags if a similar report exists within 50m in the last 7 days."
    ],
    priority: "High"
  },
  {
    id: "US-003",
    epic: "Emergency SOS",
    title: "Trigger SOS with Live Location Broadcast",
    asA: "User facing an unsafe situation",
    iWant: "to shake my phone or press the SOS button to alert emergency contacts and nearby authorities with my live GPS trail",
    soThat: "help can locate me instantly.",
    acceptanceCriteria: [
      "Countdown timer of 3 seconds allows cancellation of false alarms.",
      "SMS sent to emergency contacts with Google Maps link.",
      "Foreground service streams live location updates every 10 seconds to Firestore."
    ],
    priority: "High"
  },
  {
    id: "US-004",
    epic: "Women Safety",
    title: "Safe Route Navigation",
    asA: "Woman traveling late at night",
    iWant: "to view and navigate along routes rated safe based on lighting, police patrols, and crowd density",
    soThat: "I can minimize risks during night transit.",
    acceptanceCriteria: [
      "Map overlays show safety index heatmaps along walking paths.",
      "Option to share live journey link with trusted contacts."
    ],
    priority: "High"
  },
  {
    id: "US-005",
    epic: "Authority Dashboard",
    title: "Ward Officer Complaint Management",
    asA: "BMC Ward Officer",
    iWant: "to view incoming AI-vetted complaints on a ward map, assign field teams, and update resolution statuses",
    soThat: "ward operations run efficiently and SLAs are met.",
    acceptanceCriteria: [
      "Admin login with role-based JWT / Firebase Custom Claims.",
      "Kanban board and Map view of active complaints.",
      "One-click status change notifying the reporting citizen via FCM."
    ],
    priority: "Medium"
  }
];

export const phase1DatabaseDesign: DatabaseCollection[] = [
  {
    name: "users",
    description: "Stores citizen profiles, emergency contacts, roles, and badge stats.",
    fields: [
      { name: "uid", type: "string (PK)", description: "Firebase Auth UID" },
      { name: "displayName", type: "string", description: "User's full name" },
      { name: "phoneNumber", type: "string", description: "Verified mobile number" },
      { name: "role", type: "string", description: "'citizen', 'ward_officer', 'admin', 'responder'" },
      { name: "wardId", type: "string", description: "Assigned Mumbai ward (e.g., 'K-West')" },
      { name: "emergencyContacts", type: "array<map>", description: "List of trusted contacts name & phone" },
      { name: "civicPoints", type: "number", description: "Reward points earned from reports" },
      { name: "badges", type: "array<string>", description: "Unlocked achievement badges" },
      { name: "createdAt", type: "timestamp", description: "Registration timestamp" }
    ],
    securityRulesSummary: "Read/write allowed for owner; admin read access across all users."
  },
  {
    name: "complaints",
    description: "Central collection for civic grievances reported by citizens.",
    fields: [
      { name: "id", type: "string (PK)", description: "Firestore auto ID" },
      { name: "userId", type: "string (FK)", description: "Reporter user ID" },
      { name: "category", type: "string", description: "Pothole, Garbage, Water, etc." },
      { name: "description", type: "string", description: "Citizen voice/text description" },
      { name: "imageUrl", type: "string", description: "Firebase Storage download URL" },
      { name: "location", type: "geopoint", description: "Latitude & Longitude" },
      { name: "address", type: "string", description: "Geocoded human-readable Mumbai address" },
      { name: "ward", type: "string", description: "BMC Ward name (e.g., 'A-Ward', 'K-West')" },
      { name: "severity", type: "string", description: "Low, Medium, High, Critical" },
      { name: "department", type: "string", description: "Assigned municipal department" },
      { name: "status", type: "string", description: "Submitted, Assigned, In_Progress, Resolved, Rejected" },
      { name: "upvotes", type: "number", description: "Community importance vote count" },
      { name: "aiSummary", type: "string", description: "Gemini AI generated summary & recommendations" },
      { name: "assignedTeamId", type: "string", description: "Field team ID assigned by officer" },
      { name: "createdAt", type: "timestamp", description: "Report creation time" },
      { name: "resolvedAt", type: "timestamp", description: "Resolution completion time" }
    ],
    securityRulesSummary: "Public read for community feed; authenticated users can create; assigned ward officers and creator can update."
  },
  {
    name: "emergency_alerts",
    description: "Broadcasted disaster alerts, heavy rain warnings, and flood advisories.",
    fields: [
      { name: "id", type: "string (PK)", description: "Alert ID" },
      { name: "title", type: "string", description: "Alert title (e.g., 'Red Alert: High Tide & Heavy Rainfall')" },
      { name: "message", type: "string", description: "Detailed advisory instructions" },
      { name: "severity", type: "string", description: "Advisory, Watch, Warning, Emergency" },
      { name: "affectedZones", type: "array<string>", description: "List of affected Mumbai areas" },
      { name: "active", type: "boolean", description: "Whether alert is currently active" },
      { name: "issuedAt", type: "timestamp", description: "Timestamp" }
    ],
    securityRulesSummary: "Public read; write restricted to Disaster Management admins."
  },
  {
    name: "shelters",
    description: "Emergency relief shelters, cyclone centers, and flood relief camps.",
    fields: [
      { name: "id", type: "string (PK)", description: "Shelter ID" },
      { name: "name", type: "string", description: "Shelter name (e.g., 'Bandra Kurla Complex Relief Center')" },
      { name: "location", type: "geopoint", description: "Lat/Long coordinates" },
      { name: "capacity", type: "number", description: "Max capacity" },
      { name: "currentOccupancy", type: "number", description: "Current count" },
      { name: "contactPhone", type: "string", description: "Warden contact number" }
    ],
    securityRulesSummary: "Public read; admin write."
  }
];

export const phase1FolderStructure: FolderNode = {
  name: "com.safecity.mumbai",
  type: "folder",
  children: [
    {
      name: "di",
      type: "folder",
      description: "Hilt Dependency Injection modules (NetworkModule, FirebaseModule, DatabaseModule)"
    },
    {
      name: "data",
      type: "folder",
      description: "Data layer: repositories, local Room DB, remote Firestore datasources, Retrofit APIs"
    },
    {
      name: "domain",
      type: "folder",
      description: "Domain layer: business models, use cases (ReportComplaintUseCase, TriggerSosUseCase)"
    },
    {
      name: "presentation",
      type: "folder",
      description: "UI Layer: Jetpack Compose screens, ViewModels, navigation graphs, design system theme"
    },
    {
      name: "service",
      type: "folder",
      description: "Background services: Firebase Messaging Service, Location Tracking Foreground Service, SOS Broadcast Receiver"
    }
  ]
};

export const phase1Roadmap: RoadmapPhase[] = [
  {
    phase: 1,
    title: "Architecture, PRD & System Design",
    duration: "Week 1 - 2",
    deliverables: ["Product Requirement Document", "Firestore Schema & ER Diagrams", "Screen Flow & Figma Wireframes", "Android Clean Architecture Setup"],
    status: "Completed"
  },
  {
    phase: 2,
    title: "Core Android App & Emergency Services",
    duration: "Week 3 - 4",
    deliverables: ["Jetpack Compose UI Framework", "Emergency One-Touch Calling", "Google Maps Nearby Infrastructure", "Room Local Caching"],
    status: "Pending Approval"
  },
  {
    phase: 3,
    title: "AI Civic Reporter & Gemini Integration",
    duration: "Week 5 - 6",
    deliverables: ["CameraX + ML Kit Integration", "Gemini 2.5 Flash API Triage & Classification", "Voice Speech-to-Text Reporting", "Duplicate Complaint Detection Engine"],
    status: "Pending Approval"
  },
  {
    phase: 4,
    title: "Emergency SOS & Women Safety",
    duration: "Week 7 - 8",
    deliverables: ["Foreground Service Live Tracking", "SMS & FCM Alert Broadcasts", "Safe Route Navigation Engine", "Night Mode Safety Check-ins"],
    status: "Pending Approval"
  },
  {
    phase: 5,
    title: "Authority Dashboard & Disaster Feed",
    duration: "Week 9 - 10",
    deliverables: ["Admin Portal & Role Authentication", "Ward-wise Heatmaps & Analytics", "Disaster Warning System & Shelter Locator"],
    status: "Pending Approval"
  },
  {
    phase: 6,
    title: "Testing, Play Store Deployment & BMC Pilot",
    duration: "Week 11 - 12",
    deliverables: ["End-to-End Instrumentation Testing", "Firebase Security Rules Audit", "Google Play Store Production Release", "BMC Field Officer Training Pilot"],
    status: "Pending Approval"
  }
];
