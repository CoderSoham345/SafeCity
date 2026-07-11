export interface AuditItem {
  id: number;
  category: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  auditFinding: string;
  engineeringRemediation: string;
  codeSnippet: string;
}

export const auditReportData: AuditItem[] = [
  {
    id: 1,
    category: "Missing Features",
    title: "Offline Sync Queue & Room DB Conflict Resolver",
    severity: "High",
    auditFinding: "Without an offline sync worker, citizens in patchy Mumbai local trains or basements cannot queue complaint submissions.",
    engineeringRemediation: "Implement WorkManager CoroutineWorker with Room DB transaction queueing and automatic sync retry upon network restoration.",
    codeSnippet: `class ComplaintSyncWorker(context: Context, params: WorkerParameters) : CoroutineWorker(context, params) {\n  override suspend fun doWork(): Result {\n    val unsynced = database.complaintDao().getUnsynced()\n    return if (repository.syncBatch(unsynced)) Result.success() else Result.retry()\n  }\n}`
  },
  {
    id: 2,
    category: "Missing Screens",
    title: "Dedicated Emergency SOS Live Tracking Activity",
    severity: "Critical",
    auditFinding: "Emergency SOS requires an isolated full-screen live tracking HUD that stays active even if the main app is backgrounded.",
    engineeringRemediation: "Create a foreground service with persistent notification and Google Maps Polyline stream broadcasting to Firebase.",
    codeSnippet: `class SosForegroundService : Service() {\n  override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {\n    startForeground(NOTIFICATION_ID, createNotification())\n    startLocationUpdates()\n    return START_STICKY\n  }\n}`
  },
  {
    id: 3,
    category: "Missing Navigation",
    title: "Deep Linking & FCM Intent NavGraph Routing",
    severity: "Medium",
    auditFinding: "Push notifications from FCM must deep link directly into the specific complaint detail or disaster alert screen.",
    engineeringRemediation: "Configure Jetpack Navigation deepLinks with URI pattern 'safecity://complaint/{id}' and Intent extras extraction in MainActivity.",
    codeSnippet: `composable(\n  route = "complaint_detail/{complaintId}",\n  deepLinks = listOf(navDeepLink { uriPattern = "safecity://complaint/{complaintId}" })\n) { backStackEntry ->\n  ComplaintDetailScreen(complaintId = backStackEntry.arguments?.getString("complaintId"))\n}`
  },
  {
    id: 4,
    category: "Missing Database Collections",
    title: "User Audit Logs & Emergency Contacts Sub-collection",
    severity: "High",
    auditFinding: "Emergency SOS relies on quick access to trusted contacts. Storing them inside user document arrays limits querying and updates.",
    engineeringRemediation: "Establish a dedicated sub-collection `users/{uid}/emergency_contacts` with secure Firestore rules.",
    codeSnippet: `match /users/{userId}/emergency_contacts/{contactId} {\n  allow read, write: if request.auth != null && request.auth.uid == userId;\n}`
  },
  {
    id: 5,
    category: "Missing API Integrations",
    title: "Gemini 2.5 Flash Server-Side Proxy & OkHttp Interceptor",
    severity: "Critical",
    auditFinding: "Exposing Gemini API keys in client APK risks reverse engineering and quota abuse.",
    engineeringRemediation: "Route all AI requests through Node.js Express `/api/gemini/triage` endpoint using OkHttp with secure headers.",
    codeSnippet: `const response = await ai.models.generateContent({\n  model: 'gemini-2.5-flash',\n  contents: [imagePart, voiceTranscript],\n});`
  },
  {
    id: 6,
    category: "Missing Firebase Features",
    title: "Firebase App Check & Device Attestation",
    severity: "High",
    auditFinding: "Prevent automated bot spam and fake complaint submissions to municipal databases.",
    engineeringRemediation: "Integrate Firebase App Check with Play Integrity provider in Application onCreate().",
    codeSnippet: `FirebaseAppCheck.getInstance().installAppCheckProviderFactory(\n  PlayIntegrityAppCheckProviderFactory.getInstance()\n)`
  },
  {
    id: 7,
    category: "Missing AI Features",
    title: "Multilingual Voice Sentiment & Mumbai Slang NLP",
    severity: "Medium",
    auditFinding: "Citizens report issues in Marathi, Hindi, and Bambaiya slang ('khaddha', 'paani tummbav').",
    engineeringRemediation: "Configure Gemini prompt engineering with Mumbai linguistic context tokens for accurate categorization.",
    codeSnippet: `val prompt = "Analyze this Mumbai civic report in Marathi/Hindi/English: '$userText'. Extract category, severity, and ward."`
  },
  {
    id: 8,
    category: "Missing Permissions",
    title: "Granular Runtime Permissions & Foreground Location",
    severity: "Critical",
    auditFinding: "Android 14+ enforces strict background location and camera permissions handling.",
    engineeringRemediation: "Implement Accompanist / Compose Permissions state request with rationale dialogs for ACCESS_FINE_LOCATION and POST_NOTIFICATIONS.",
    codeSnippet: `val locationPermissionState = rememberPermissionState(Manifest.permission.ACCESS_FINE_LOCATION)`
  },
  {
    id: 9,
    category: "Missing Error Handling",
    title: "Result Sealed Class & Retry StateFlow Pattern",
    severity: "High",
    auditFinding: "Uncaught exceptions during network calls crash ViewModels.",
    engineeringRemediation: "Adopt Result<T> sealed wrapper across all UseCases and Repositories with StateFlow error emission.",
    codeSnippet: `sealed class Resource<out T> {\n  data class Success<T>(val data: T) : Resource<T>()\n  data class Error(val exception: Throwable) : Resource<Nothing>()\n  object Loading : Resource<Nothing>()\n}`
  },
  {
    id: 10,
    category: "Missing Loading States",
    title: "Compose Shimmer Effect & Skeleton Loaders",
    severity: "Medium",
    auditFinding: "Abrupt blank screens while fetching Firestore complaint feeds cause poor UX.",
    engineeringRemediation: "Build reusable Compose shimmer brush animation for lists and maps.",
    codeSnippet: `val shimmerBrush = rememberShimmerBrush()`
  },
  {
    id: 11,
    category: "Missing Empty States",
    title: "Illustrative Empty State & Quick Action CTA",
    severity: "Low",
    auditFinding: "Empty complaint history or search results need helpful guidance.",
    engineeringRemediation: "Design Material 3 empty state cards with vector illustrations and primary action buttons.",
    codeSnippet: `@Composable fun EmptyState(title: String, subtitle: String, onAction: () -> Unit)`
  },
  {
    id: 12,
    category: "Missing Accessibility",
    title: "TalkBack Content Descriptions & Minimum Touch Targets",
    severity: "High",
    auditFinding: "Emergency buttons and navigation icons must satisfy 48dp minimum touch target and semantic descriptions.",
    engineeringRemediation: "Add `semantics { contentDescription = '...' }` and `Modifier.sizeIn(minWidth = 48.dp, minHeight = 48.dp)`.",
    codeSnippet: `Modifier.semantics { contentDescription = "Emergency SOS button, tap twice to broadcast distress" }`
  },
  {
    id: 13,
    category: "Missing Security",
    title: "EncryptedSharedPreferences & BiometricPrompt",
    severity: "High",
    auditFinding: "JWT auth tokens and emergency contact numbers stored insecurely.",
    engineeringRemediation: "Use MasterKey and EncryptedSharedPreferences for token storage with BiometricPrompt verification for authority login.",
    codeSnippet: `val masterKey = MasterKey.Builder(context).setKeyScheme(MasterKey.KeyScheme.AES256_GCM).build()`
  },
  {
    id: 14,
    category: "Missing Performance",
    title: "LazyColumn Item Keys & Baseline Profiles",
    severity: "High",
    auditFinding: "Jank during rapid scrolling of community complaint feeds.",
    engineeringRemediation: "Provide stable keys in LazyColumn { items(items, key = { it.id }) { ... } } and generate Baseline Profiles.",
    codeSnippet: `LazyColumn { items(complaints, key = { it.id }) { complaint -> ComplaintCard(complaint) } }`
  },
  {
    id: 15,
    category: "Missing Offline Support",
    title: "Firestore Offline Persistence & Room Caching",
    severity: "High",
    auditFinding: "App fails to display cached ward reports when cellular signal drops.",
    engineeringRemediation: "Enable Firestore persistence enabled in FirebaseFirestoreSettings and cache via Room DAO.",
    codeSnippet: `val settings = FirebaseFirestoreSettings.Builder().setPersistenceEnabled(true).build()`
  },
  {
    id: 16,
    category: "Missing Notifications",
    title: "High-Priority Notification Channels for Monsoons",
    severity: "Critical",
    auditFinding: "Disaster red alerts must bypass Do Not Disturb mode for critical life safety.",
    engineeringRemediation: "Create NotificationChannel with IMPORTANCE_HIGH and sound attributes.",
    codeSnippet: `val channel = NotificationChannel("disaster_channel", "Disaster Alerts", NotificationManager.IMPORTANCE_HIGH)`
  },
  {
    id: 17,
    category: "Missing Animations",
    title: "Material Motion Shared Element Transitions",
    severity: "Medium",
    auditFinding: "Abrupt screen transitions between complaint list and detail view.",
    engineeringRemediation: "Implement Jetpack Compose Navigation Animation sharedXWith / sharedYWith transitions.",
    codeSnippet: `Modifier.sharedElement(rememberSharedContentState(key = "image-\${id}"), animatedVisibilityScope = this)`
  },
  {
    id: 18,
    category: "Missing Testing",
    title: "JUnit5, Turbine StateFlow & MockK Suite",
    severity: "High",
    auditFinding: "Lack of comprehensive unit tests for ViewModels and UseCases.",
    engineeringRemediation: "Write Turbine test flows for StateFlow emission verification and MockK repository tests.",
    codeSnippet: `@Test fun testComplaintTriageViewModel() = runTest { viewModel.uiState.test { awaitItem() } }`
  },
  {
    id: 19,
    category: "Missing Documentation",
    title: "Dokka KDoc & Architecture Decision Records (ADR)",
    severity: "Low",
    auditFinding: "Public APIs and domain use cases require formal KDoc comments.",
    engineeringRemediation: "Add standard KDoc headers to all domain use cases and repositories.",
    codeSnippet: `/**\n * Use case responsible for triggering emergency SOS broadcast.\n */\nclass TriggerSosUseCase @Inject constructor(...)`
  },
  {
    id: 20,
    category: "Missing Play Store Requirements",
    title: "Privacy Policy, Data Safety Form & Location Disclosure",
    severity: "Critical",
    auditFinding: "Google Play Console requires prominent disclosure for background location and emergency SMS usage.",
    engineeringRemediation: "Build in-app Privacy Policy dialog and prominent disclosure banner before requesting location permission.",
    codeSnippet: `// Prominent disclosure dialog required by Google Play policy for location & SMS permissions`
  }
];

export interface RoadmapPhasePriority {
  priority: number;
  title: string;
  focus: string;
  items: string[];
}

export const priorityRoadmapData: RoadmapPhasePriority[] = [
  {
    priority: 1,
    title: "Priority 1: Critical Foundation & Safety",
    focus: "Resolving blockers, permissions, emergency SOS foreground service, and secure API routing.",
    items: [
      "Implement Foreground Service for SOS live location streaming",
      "Configure server-side Gemini 2.5 Flash API proxy route",
      "Add runtime permission handlers for Camera, Location, and SMS",
      "Enable Firestore offline persistence and Room caching"
    ]
  },
  {
    priority: 2,
    title: "Priority 2: MVP Core Features",
    focus: "AI Civic Reporter, Emergency calling directory, and Ward maps integration.",
    items: [
      "CameraX image capture with ML Kit metadata tagging",
      "Gemini AI complaint triage (category, severity, department)",
      "Google Maps SDK nearby police stations & hospitals",
      "One-touch emergency calling intents (112, 101, 108, 1916)"
    ]
  },
  {
    priority: 3,
    title: "Priority 3: User Experience & Community",
    focus: "Gamification, community feed, voting, and responsive Material 3 UI.",
    items: [
      "Firestore community reports feed with upvoting & comments",
      "Citizen reward badges and monthly leaderboard",
      "Shimmer skeleton loaders and empty states",
      "Material 3 dark/light dynamic theming"
    ]
  },
  {
    priority: 4,
    title: "Priority 4: AI & Disaster Enhancements",
    focus: "Multilingual NLP, flood zone heatmaps, and safe route navigation.",
    items: [
      "Marathi and Hindi voice transcription support",
      "Mumbai flood zone heatmap layer on Google Maps",
      "Safe route navigation algorithm factoring lighting & patrols",
      "Duplicate complaint detection engine (50m radius check)"
    ]
  },
  {
    priority: 5,
    title: "Priority 5: Production Readiness & DevOps",
    focus: "Testing, Play Store compliance, CI/CD, and App Check security.",
    items: [
      "Turbine StateFlow & JUnit5 unit test suite",
      "Firebase App Check Play Integrity integration",
      "Play Store Prominent Disclosure & Privacy Policy compliance",
      "GitHub Actions CI/CD automated release pipeline"
    ]
  }
];
