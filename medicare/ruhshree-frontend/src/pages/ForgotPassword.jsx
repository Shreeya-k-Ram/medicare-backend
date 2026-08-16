import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import doctorImage from "../assets/doctor.jpg";
import "./ForgotPassword.css";

function ForgotPassword() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        try {

            const response = await fetch(
                `http://localhost:8080/users/reset-password?email=${encodeURIComponent(email)}&newPassword=${encodeURIComponent(newPassword)}`,
                {
                    method: "POST"
                }
            );

            const message = await response.text();

            if (!response.ok) {
                throw new Error(message || "Unable to reset password.");
            }

            setSuccess("Password reset successfully!");

            setEmail("");
            setNewPassword("");
            setConfirmPassword("");

            setTimeout(() => {
                navigate("/login");
            }, 1500);

        } catch (error) {

            console.error(error);
            setError(error.message);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="forgot-page">

            <div className="forgot-card">

                <div className="forgot-content">

                    <div className="forgot-brand">

                        <div className="forgot-logo">
                            ♡
                        </div>

                        <div>
                            <h2>RuhShree Health</h2>
                            <p>Human-first care</p>
                        </div>

                    </div>


                    <div className="forgot-heading">

                        <p className="forgot-small-title">
                            Account recovery
                        </p>

                        <h1>
                            Reset your
                            <br />
                            <span>password.</span>
                        </h1>

                        <p className="forgot-description">
                            Enter your registered email and create
                            a new password for your RuhShree account.
                        </p>

                    </div>


                    <form onSubmit={handleResetPassword}>

                        <div className="form-group">

                            <label>Email</label>

                            <input
                                type="email"
                                placeholder="Enter your registered email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label>New Password</label>

                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) =>
                                    setNewPassword(e.target.value)
                                }
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label>Confirm New Password</label>

                            <input
                                type="password"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />

                        </div>


                        {error && (
                            <p className="forgot-error">
                                {error}
                            </p>
                        )}


                        {success && (
                            <p className="forgot-success">
                                {success}
                            </p>
                        )}


                        <button
                            type="submit"
                            className="forgot-button"
                            disabled={loading}
                        >
                            {loading
                                ? "Resetting..."
                                : "Reset password"
                            }

                            <span>→</span>
                        </button>

                    </form>


                    <button
                        className="back-login"
                        onClick={() => navigate("/login")}
                    >
                        ← Back to sign in
                    </button>


                    <p className="forgot-footer">
                        Your care. Your story. Your health.
                    </p>

                </div>


                <div className="forgot-image">

                    <img
                        src={doctorImage}
                        alt="Doctor providing care"
                    />

                    <div className="image-overlay-card">

                        <span>♡</span>

                        <div>
                            <strong>
                                Human-first care
                            </strong>

                            <p>
                                Healthcare designed around you.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ForgotPassword;