// utils.js: Core API configurations and utility functions

const API_BASE_URL = '/api';

export function getOrCreateUserId() {
    let userId = localStorage.getItem('focuslearn_userId');
    if (!userId) {
        window.location.href = '/login.html';
        throw new Error('Not logged in');
    }
    return userId;
}

export function logout() {
    localStorage.removeItem('focuslearn_userId');
    window.location.href = '/index.html';
}

export function setActiveNav(page) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.dataset.page === page) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// API Calls
export async function createGoal(title, duration) {
    const response = await fetch(`${API_BASE_URL}/goal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title,
            duration: Number(duration),
            userId: getOrCreateUserId()
        })
    });
    if (!response.ok) throw new Error('Failed to create goal');
    return await response.json();
}

export async function fetchUserGoals() {
    const response = await fetch(`${API_BASE_URL}/goals?userId=${getOrCreateUserId()}`);
    if (!response.ok) throw new Error('Failed to fetch goals');
    return await response.json();
}

export async function submitResourceQuiz(taskId, resourceIndex, answers) {
    const userId = localStorage.getItem('focuslearn_userId');
    const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ taskId, resourceIndex, answers, userId })
    });
    if (!response.ok) throw new Error('Submission failed');
    return response.json();
}

export async function updateTaskCompletion(taskId, completed) {
    const response = await fetch(`${API_BASE_URL}/task/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
    });
    if (!response.ok) throw new Error('Failed to update task');
    return await response.json();
}

export async function fetchMentorChats() {
    const response = await fetch(`${API_BASE_URL}/chat?userId=${getOrCreateUserId()}`);
    if (!response.ok) throw new Error('Failed to fetch chats');
    return await response.json();
}

export async function sendMentorMessage(message) {
    const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, userId: getOrCreateUserId() })
    });
    if (!response.ok) throw new Error('Failed to send message');
    return await response.json();
}

// ---------------- PHASE 2 UTILS ----------------

export function initTheme() {
    if (localStorage.getItem('focuslearn_theme') === 'light') {
        document.body.classList.add('light-theme');
    }
}

export function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('focuslearn_theme', isLight ? 'light' : 'dark');
}

export async function syncUserFocusTime(addFocusTime) {
    const res = await fetch(`${API_BASE_URL}/user/sync`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: getOrCreateUserId(), addFocusTime })
    });
    return await res.json();
}

export async function fetchUserStats() {
    const res = await fetch(`${API_BASE_URL}/user/${getOrCreateUserId()}`);
    return await res.json();
}

export async function updateTaskNotes(taskId, notes) {
    const res = await fetch(`${API_BASE_URL}/task/${taskId}/notes`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes })
    });
    return await res.json();
}

export async function reorderTasks(orderMap) {
    const res = await fetch(`${API_BASE_URL}/task/reorder`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderMap })
    });
    return await res.json();
}

export async function shareGoal(goalId) {
    const res = await fetch(`${API_BASE_URL}/goal/${goalId}/share`, { method: 'PUT' });
    return await res.json();
}

// ---------------- PHASE 3 UTILS ----------------
export async function seedCourses() {
    return await fetch(`${API_BASE_URL}/courses/seed`, { method: 'POST' }).then(r=>r.json());
}

export async function fetchCourses(category = '') {
    const url = category ? `${API_BASE_URL}/courses?category=${category}` : `${API_BASE_URL}/courses`;
    return await fetch(url).then(r=>r.json());
}

export async function evaluateReminders() {
    return await fetch(`${API_BASE_URL}/reminders/evaluate`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: getOrCreateUserId() })
    }).then(r=>r.json());
}

export async function fetchReminders() {
    return await fetch(`${API_BASE_URL}/reminders?userId=${getOrCreateUserId()}`).then(r=>r.json());
}

export async function markReminderRead(id) {
    return await fetch(`${API_BASE_URL}/reminders/${id}/read`, { method: 'PUT' }).then(r=>r.json());
}

export async function skipTask(id) {
    return await fetch(`${API_BASE_URL}/task/${id}/skip`, { method: 'PUT' }).then(r=>r.json());
}

export async function submitTaskQuiz(taskId, answer) {
    return await fetch(`/api/tasks/${taskId}/quiz`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer })
    }).then(r => r.json());
}
