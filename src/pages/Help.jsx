import React from 'react';

const Help = () => {
    return (
        <div className="help-page main-content">
            <section>
                <h2>Welcome to FitTrack Help Center</h2>
                <p>Welcome to FitTrack! Here you can find answers to common questions and guides on how to make the most out of our fitness tracking and coaching platform.</p>
            </section>

            <hr />

            <section>
                <h2>Getting Started</h2>
                <h3>1. How to Sign Up:</h3>
                <div>
                    <li>Click on the “Sign Up” button on the homepage.</li>
                    <li>Fill in your personal details, such as your name, email, and password.</li>
                    <li>Select whether you are signing up as a user or a coach.</li>
                    <li>Verify your email address, and you’re all set to start using FitTrack!</li>
                </div>

                <h3>2. Logging In:</h3>
                <div>
                    <li>Click on the “Login” button on the homepage.</li>
                    <li>Enter your email and password, then click “Login.”</li>
                    <li>If you forget your password, use the “Forgot Password” link to reset it.</li>
                </div>
            </section>

            <hr />

            <section>
                <h2>Tracking Workouts</h2>
                <h3>1. Logging a Workout:</h3>
                <div>
                    <li>Navigate to the “Workout Tracking” section.</li>
                    <li>Click “Add Workout” and fill in the details like exercises, sets, reps, and weights.</li>
                    <li>Save the workout to track your progress.</li>
                </div>

                <h3>2. Viewing Past Workouts:</h3>
                <div>
                    <li>Go to the “Workout History” section to see all the workouts you’ve logged.</li>
                    <li>Filter workouts by date, type, or intensity to find specific sessions.</li>
                </div>

                <h3>3. Workout Plans:</h3>
                <div>
                    <li>Access your assigned workout plans under the “My Workout Plans” section.</li>
                    <li>View details of each plan, including the days of the week, exercises, and goals.</li>
                </div>
            </section>

            <hr />

            <section>
                <h2>Nutrition Tracking</h2>
                <h3>1. Logging Meals:</h3>
                <div>
                    <li>Go to the “Nutrition Tracking” section.</li>
                    <li>Click “Add Meal” to log your food intake.</li>
                    <li>Enter the foods you’ve eaten, along with their portions and nutritional information.</li>
                </div>

                <h3>2. Setting Nutrition Goals:</h3>
                <div>
                    <li>Set daily or weekly nutrition goals in the “Goals” section.</li>
                    <li>Monitor your caloric intake, macronutrients, and water consumption.</li>
                </div>

                <h3>3. Viewing Nutrition History:</h3>
                <div>
                    <li>Review your daily or weekly nutrition history under the “Nutrition History” section.</li>
                    <li>Track your progress towards meeting your nutrition goals.</li>
                </div>
            </section>

            <hr />

            <section>
                <h2>Managing Workout Plans</h2>
                <h3>1. Creating a Workout Plan (Coaches Only):</h3>
                <div>
                    <li>Coaches can navigate to the “Create Workout Plan” section.</li>
                    <li>Define the workout plan title, description, and the number of workout days per week.</li>
                    <li>Add exercises to each day and save the plan.</li>
                </div>

                <h3>2. Assigning Workout Plans (Coaches Only):</h3>
                <div>
                    <li>Assign the workout plan to your clients through the “Manage Clients” section.</li>
                    <li>Monitor your client’s progress through the “Client Progress” dashboard.</li>
                </div>

                <h3>3. Editing Workout Plans:</h3>
                <div>
                    <li>Go to the “Manage Workout Plans” section.</li>
                    <li>Select a plan to edit, update the exercises or days, and save changes.</li>
                </div>
            </section>

            <hr />

            <section>
                <h2>Progress Monitoring</h2>
                <h3>1. Tracking Your Progress:</h3>
                <div>
                    <li>View your progress over time in the “Progress” section.</li>
                    <li>Charts and graphs are available to visualize your weight, body measurements, and workout performance.</li>
                </div>

                <h3>2. Setting Goals:</h3>
                <div>
                    <li>Set personal goals in the “Goals” section.</li>
                    <li>Goals can be related to workouts, nutrition, or overall fitness.</li>
                </div>
            </section>

            <hr />

            <section>
                <h2>Account Management</h2>
                <h3>1. Updating Personal Information:</h3>
                <div>
                    <li>Update your profile details in the “Account Settings” section.</li>
                    <li>Change your password, email, or profile picture.</li>
                </div>

                <h3>2. Managing Subscriptions:</h3>
                <div>
                    <li>Manage your subscription plan in the “Subscription” section.</li>
                    <li>Upgrade to premium for access to exclusive content and features.</li>
                </div>
            </section>

            <hr />

            <section>
                <h2>Frequently Asked Questions</h2>
                <h3>Q1: How do I reset my password?</h3>
                <p>Click on the “Forgot Password” link on the login page and follow the instructions.</p>

                <h3>Q2: Can I change my subscription plan?</h3>
                <p>Yes, you can change your subscription plan at any time in the “Subscription” section.</p>

                <h3>Q3: How do I contact support?</h3>
                <p>You can contact our support team via the “Contact Us” section or email support@fittrack.com.</p>
            </section>

            <hr />

            <section>
                <h2>Contact Us</h2>
                <p>If you have any questions or need further assistance, feel free to reach out to us:</p>
                <div>
                    <li><strong>Email:</strong> support@fittrack.com</li>
                    <li><strong>Phone:</strong> +1-800-FIT-TRACK</li>
                    <li><strong>Live Chat:</strong> Available on the website during business hours.</li>
                </div>
            </section>

            <hr />

            <p>Thank you for choosing FitTrack! We’re here to help you reach your fitness goals.</p>
        </div>
    );
};

export default Help;
