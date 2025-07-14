// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const createForm = document.getElementById('create-form');
const dataContainer = document.getElementById('data-container');

// Create
createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('create-name').value;
    const email = document.getElementById('create-email').value;

    db.collection('users').add({
        name: name,
        email: email
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        createForm.reset();
        read();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
});

// Read
function read() {
    dataContainer.innerHTML = '';
    db.collection('users').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const user = doc.data();
            const userElement = `
                <div>
                    <p>Name: ${user.name}</p>
                    <p>Email: ${user.email}</p>
                    <button onclick="update('${doc.id}')">Update</button>
                    <button onclick="deleteDoc('${doc.id}')">Delete</button>
                </div>
                <hr>
            `;
            dataContainer.innerHTML += userElement;
        });
    });
}

// Update
function update(id) {
    const newName = prompt("Enter new name:");
    const newEmail = prompt("Enter new email:");

    if (newName && newEmail) {
        db.collection('users').doc(id).update({
            name: newName,
            email: newEmail
        })
        .then(() => {
            console.log("Document successfully updated!");
            read();
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    }
}

// Delete
function deleteDoc(id) {
    db.collection('users').doc(id).delete()
    .then(() => {
        console.log("Document successfully deleted!");
        read();
    })
    .catch((error) => {
        console.error("Error removing document: ", error);
    });
}

// Initial read
read();
