/* CyberSafe — Vanilla JavaScript
   No backend, database, API or personal-data storage is used. */

const caseStudies = [
  {
    id: "CD-01",
    title: "FedEx / Courier Impersonation",
    location: "India — location not specified",
    type: "Courier / Social Engineering",
    summary:
      "A caller may claim that a parcel in the victim's name has been seized or contains illegal material, then connect the victim with another person posing as an official.",
    warnings: [
      "Unexpected courier call",
      "Claims involving customs, police or illegal parcels",
      "Pressure to continue the call",
    ],
    lesson:
      "Do not treat an unexpected caller as an official source. End the call and verify the situation through the courier's official contact details.",
  },
  {
    id: "CD-02",
    title: "YouTube Like / Task Scam",
    location: "India — location not specified",
    type: "Employment / Social Engineering",
    summary:
      "Fraudsters may approach people through messaging platforms with part-time or work-from-home offers involving simple online tasks such as liking or subscribing to videos.",
    warnings: [
      "Unsolicited job offer",
      "WhatsApp or Telegram approach",
      "Requests that gradually involve money",
    ],
    lesson:
      "Treat unexpected online job offers cautiously and never transfer money simply to unlock tasks, earnings or withdrawals.",
  },
  {
    id: "CD-03",
    title: "Online Shopping Scam",
    location: "India — location not specified",
    type: "Online Shopping / Financial",
    summary:
      "Fraudulent shopping websites can imitate legitimate stores and use unusually attractive offers to encourage payment or collection of sensitive information.",
    warnings: [
      "Unusually large discounts",
      "Unfamiliar store domain",
      "Pressure to pay before verification",
    ],
    lesson:
      "Use trusted stores, inspect the website carefully and verify the seller before making a payment.",
  },
  {
    id: "CD-04",
    title: "Identity Theft Pattern",
    location: "India — location not specified",
    type: "Identity / Financial",
    summary:
      "Identity theft involves dishonest acquisition or misuse of another person's important personal or financial information for fraudulent activity.",
    warnings: [
      "Requests for sensitive identity information",
      "Unexpected account activity",
      "Unknown use of personal credentials",
    ],
    lesson:
      "Keep passwords and sensitive identifiers private and investigate unexpected account activity quickly.",
  },
  {
    id: "CD-05",
    title: "Digital Arrest Pattern",
    location: "India — location not specified",
    type: "Impersonation / Social Engineering",
    summary:
      "A scammer may impersonate police, government or other authorities and use fear, urgency or threats to pressure a person into following instructions.",
    warnings: [
      "Official-looking impersonation",
      "Threats of arrest or legal action",
      "Demand for immediate payment or secrecy",
    ],
    lesson:
      "A threatening call is not proof of official authority. Stop, verify independently and do not transfer money because of pressure.",
  },
  {
    id: "CD-06",
    title: "Fake Investment Pattern",
    location: "India — location not specified",
    type: "Investment / Financial",
    summary:
      "Fraudulent investment schemes can use attractive return claims and social engineering to persuade victims to transfer funds.",
    warnings: [
      "Guaranteed or unusually high returns",
      "Pressure to invest quickly",
      "Difficulty withdrawing funds",
    ],
    lesson:
      "Verify investment opportunities independently and be especially cautious about guaranteed returns.",
  },
  {
    id: "CD-07",
    title: "Fake Customer Support Pattern",
    location: "India — location not specified",
    type: "Support / Social Engineering",
    summary:
      "A person may encounter a fake support contact that asks for credentials, remote-access software or payment information while pretending to help with an account or service.",
    warnings: [
      "Support contact you did not initiate",
      "Requests for OTP/password",
      "Unknown application or remote-access request",
    ],
    lesson:
      "Start support conversations from the service's official website or app instead of trusting a contact supplied by a stranger.",
  },
];

const threats = [
  {
    name: "Digital Arrest Scam",
    category: ["social", "financial"],
    icon: "◈",
    description:
      "Impersonation and pressure tactics designed to create fear, urgency or a false sense of legal authority.",
    warnings:
      "Threats of arrest, secrecy, immediate payment or a demand to stay on a call.",
    tip: "Pause and verify independently through an official channel.",
  },
  {
    name: "OTP Fraud",
    category: ["financial", "identity"],
    icon: "⌁",
    description:
      "Attempts to obtain one-time passwords or other authentication information from a victim.",
    warnings: "Requests for OTPs, PINs, passwords or screen-sharing.",
    tip: "Never disclose an OTP or password to a caller.",
  },
  {
    name: "Phishing",
    category: ["social", "identity"],
    icon: "✉",
    description:
      "Deceptive messages or websites designed to make a person reveal information or take an unsafe action.",
    warnings:
      "Urgent links, suspicious domains, unexpected attachments or login requests.",
    tip: "Open the official website yourself instead of using a suspicious link.",
  },
  {
    name: "Fake Investment Scam",
    category: ["financial"],
    icon: "◒",
    description:
      "Fraudulent opportunities that use promises of high or guaranteed returns to attract payments.",
    warnings:
      "Guaranteed returns, pressure to invest, fake dashboards or blocked withdrawals.",
    tip: "Verify the firm, offer and payment route independently.",
  },
  {
    name: "Job Scam",
    category: ["employment", "financial", "social"],
    icon: "▣",
    description:
      "Fake employment or task offers that may later request fees, deposits or sensitive information.",
    warnings:
      "Unsolicited offers, easy-money claims and requests for payment to start work.",
    tip: "Verify the employer using independently sourced contact details.",
  },
  {
    name: "Identity Theft",
    category: ["identity", "financial"],
    icon: "ID",
    description:
      "Misuse of another person's identifying or authentication information for fraudulent activity.",
    warnings:
      "Unknown account activity or requests for unnecessary identity credentials.",
    tip: "Use unique passwords and review important accounts regularly.",
  },
  {
    name: "Social Media Impersonation",
    category: ["identity", "social"],
    icon: "◎",
    description:
      "Someone pretends to be another person or organization online to gain trust or obtain information.",
    warnings:
      "New accounts, unusual requests, mismatched profiles or urgent money requests.",
    tip: "Verify the person through a separate trusted channel.",
  },
  {
    name: "Fake Customer Support",
    category: ["social", "financial"],
    icon: "⌂",
    description:
      "Fraudsters pose as support staff and may ask for passwords, OTPs, payment details or unknown software.",
    warnings:
      "Unexpected support contact and requests for remote access or credentials.",
    tip: "Use support links found directly on the official service.",
  },
];

const safetyTips = [
  "Use strong passwords.",
  "Use different passwords for important accounts.",
  "Enable MFA.",
  "Never share OTP/PIN/password.",
  "Verify links before opening them.",
  "Verify investment opportunities.",
  "Keep software updated.",
  "Avoid unknown applications.",
  "Review banking transactions.",
  "Know how to report cybercrime.",
];

const caseGrid = document.getElementById("caseGrid");
const threatGrid = document.getElementById("threatGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const toast = document.getElementById("toast");
let lastFocusedElement = null;

function renderCases(items = caseStudies) {
  if (!items.length) {
    caseGrid.innerHTML = `<div class="search-empty">No case-study matches found.</div>`;
    return;
  }
  caseGrid.innerHTML = items
    .map(
      (item) => `
    <article class="case-card">
      <div class="card-meta"><span>${item.id}</span><span>${item.location}</span></div>
      <span class="tag">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <ul class="warning-list">${item.warnings.map((w) => `<li>${w}</li>`).join("")}</ul>
      <div class="card-footer">
        <span class="source-note">Awareness pattern</span>
        <button class="text-btn" type="button" data-case-id="${item.id}">Learn More →</button>
      </div>
    </article>
  `,
    )
    .join("");
}

function renderThreats(filter = "all", searchTerm = "") {
  let items = threats.filter(
    (item) => filter === "all" || item.category.includes(filter),
  );
  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    items = items.filter((item) =>
      `${item.name} ${item.description} ${item.warnings} ${item.tip}`
        .toLowerCase()
        .includes(q),
    );
  }
  if (!items.length) {
    threatGrid.innerHTML = `<div class="search-empty">No threat matches found.</div>`;
    return;
  }
  threatGrid.innerHTML = items
    .map(
      (item) => `
    <article class="threat-card">
      <div class="threat-icon" aria-hidden="true">${item.icon}</div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="tip"><strong>Warning signs:</strong> ${item.warnings}</div>
      <div class="tip"><strong>Prevention:</strong> ${item.tip}</div>
      <button class="text-btn" type="button" data-threat-name="${item.name}" style="margin-top:12px">View details →</button>
    </article>
  `,
    )
    .join("");
}

function openCaseModal(item) {
  lastFocusedElement = document.activeElement;
  modalEyebrow.textContent = `${item.id} • ${item.type}`;
  modalTitle.textContent = item.title;
  modalBody.innerHTML = `
    <div class="modal-content-block"><h3>INCIDENT SUMMARY</h3><p>${item.summary}</p></div>
    <div class="modal-content-block"><h3>SCAM METHOD</h3><p>${item.type}</p></div>
    <div class="modal-content-block"><h3>WARNING SIGNS</h3><ul>${item.warnings.map((w) => `<li>${w}</li>`).join("")}</ul></div>
    <div class="modal-content-block"><h3>SAFETY LESSON</h3><p>${item.lesson}</p></div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function openThreatModal(item) {
  lastFocusedElement = document.activeElement;
  modalEyebrow.textContent = "THREAT DETAIL";
  modalTitle.textContent = item.name;
  modalBody.innerHTML = `
    <div class="modal-content-block"><h3>WHAT IT IS</h3><p>${item.description}</p></div>
    <div class="modal-content-block"><h3>WARNING SIGNS</h3><p>${item.warnings}</p></div>
    <div class="modal-content-block"><h3>PREVENTION</h3><p>${item.tip}</p></div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function openResultModal(level, score) {
  lastFocusedElement = document.activeElement;
  const explanation =
    level === "HIGH"
      ? "Several high-risk signals are present. The situation deserves immediate caution and independent verification."
      : level === "MEDIUM"
        ? "Some warning signals are present. Slow down, verify the person or offer independently, and avoid sharing sensitive information."
        : "Few warning signals were selected, but a low score does not prove that a situation is safe.";
  const actions =
    level === "HIGH"
      ? [
          "Stop further communication or payment.",
          "Do not share OTPs, PINs or passwords.",
          "Preserve evidence.",
          "If fraud occurred, contact the relevant bank/payment provider and use the appropriate official reporting channel.",
        ]
      : [
          "Pause before responding.",
          "Verify the identity and request independently.",
          "Never disclose passwords, OTPs or PINs.",
          "Keep evidence if the situation becomes suspicious.",
        ];
  modalEyebrow.textContent = `RISK RESULT • SCORE ${score}/7`;
  modalTitle.textContent = `Risk Level: ${level}`;
  modalBody.innerHTML = `
    <div class="modal-content-block"><h3>WHY IT MAY BE SUSPICIOUS</h3><p>${explanation}</p></div>
    <div class="modal-content-block"><h3>RECOMMENDED IMMEDIATE ACTIONS</h3><ul>${actions.map((a) => `<li>${a}</li>`).join("")}</ul></div>
    <div class="modal-content-block"><p><strong>Educational notice:</strong> This tool is an awareness aid, not a professional fraud-detection system.</p></div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(
    () => toast.classList.remove("show"),
    2400,
  );
}

function updateChecklist() {
  const boxes = [
    ...document.querySelectorAll("#checklist input[type=checkbox]"),
  ];
  const completed = boxes.filter((box) => box.checked).length;
  const percent = Math.round((completed / boxes.length) * 100);
  document.getElementById("progressText").textContent =
    `${completed} / ${boxes.length} completed`;
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;
}

renderCases();
renderThreats();

caseGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-case-id]");
  if (!button) return;
  const item = caseStudies.find(
    (caseStudy) => caseStudy.id === button.dataset.caseId,
  );
  if (item) openCaseModal(item);
});

threatGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-threat-name]");
  if (!button) return;
  const item = threats.find(
    (threat) => threat.name === button.dataset.threatName,
  );
  if (item) openThreatModal(item);
});

document.getElementById("threatFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
  renderThreats(
    button.dataset.filter,
    document.getElementById("globalSearch").value.trim(),
  );
});

document.getElementById("scamForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const values = [
    ...document.querySelectorAll('#scamForm input[type="radio"]:checked'),
  ];
  if (values.length !== 7) {
    showToast("Please answer all 7 questions first.");
    return;
  }
  const score = values.filter((input) => input.value === "yes").length;
  const level = score >= 5 ? "HIGH" : score >= 3 ? "MEDIUM" : "LOW";
  openResultModal(level, score);
});

document.querySelectorAll("#checklist input").forEach((input) => {
  input.addEventListener("change", updateChecklist);
});
updateChecklist();

const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");
menuToggle.addEventListener("click", () => {
  const open = primaryNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Close navigation menu" : "Open navigation menu",
  );
});
primaryNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    primaryNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

const globalSearch = document.getElementById("globalSearch");
globalSearch.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  const activeFilter =
    document.querySelector(".filter-btn.active")?.dataset.filter || "all";

  if (!query) {
    renderCases();
    renderThreats(activeFilter);
    return;
  }

  const matchingCases = caseStudies.filter((item) =>
    `${item.title} ${item.location} ${item.type} ${item.summary} ${item.warnings.join(" ")}`
      .toLowerCase()
      .includes(query),
  );
  renderCases(matchingCases);
  renderThreats(activeFilter, query);

  const matchedTips = safetyTips.filter((tip) =>
    tip.toLowerCase().includes(query),
  );
  if (matchedTips.length)
    showToast(
      `${matchedTips.length} safety tip${matchedTips.length > 1 ? "s" : ""} match your search.`,
    );
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  if (event.key === "Tab" && modal.classList.contains("open")) {
    const focusable = modal.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

const backTop = document.getElementById("backTop");
window.addEventListener(
  "scroll",
  () => {
    backTop.classList.toggle("show", window.scrollY > 600);
  },
  { passive: true },
);
backTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);
