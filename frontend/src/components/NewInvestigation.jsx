
import { useState } from "react";
import {
    FileText,
    Image,
    Upload,
    ArrowRight,
    ShieldCheck
} from "lucide-react";

function NewInvestigation() {
    const [contentType, setContentType] = useState("text");
    const [claim, setClaim] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div className="new-investigation">
            <div className="investigation-intro">
                <p className="dashboard-label">CONTENT VERIFICATION</p>
                <h2>Start a New Investigation</h2>
                <p>
                    Submit digital content for examination.
                    VYRAQ will help you assess authenticity and evidence.
                </p>
            </div>

            <div className="content-type-section">
                <h3>Select Content Type</h3>

                <div className="content-type-grid">
                    <button
                        className={`content-type-card ${
                            contentType === "text" ? "selected" : ""
                        }`}
                        onClick={() => setContentType("text")}
                    >
                        <FileText size={25} />
                        <span>Text & Claims</span>
                        <small>Verify statements and claims</small>
                    </button>

                    <button
                        className={`content-type-card ${
                            contentType === "image" ? "selected" : ""
                        }`}
                        onClick={() => setContentType("image")}
                    >
                        <Image size={25} />
                        <span>Image Analysis</span>
                        <small>Examine images for manipulation</small>
                    </button>
                </div>
            </div>

            {contentType === "text" && (
                <div className="submission-section">
                    <label htmlFor="claim-input">
                        Enter the statement or claim
                    </label>

                    <textarea
                        id="claim-input"
                        value={claim}
                        onChange={(e) => setClaim(e.target.value)}
                        placeholder="Paste the statement or claim you want to investigate..."
                        rows={7}
                    />

                    <p className="input-hint">
                        Provide the complete statement and any useful context.
                    </p>

                    <button
                        className="analyze-btn"
                        disabled={!claim.trim()}
                    >
                        Begin Analysis <ArrowRight size={18} />
                    </button>
                </div>
            )}

            {contentType === "image" && (
                <div className="submission-section">
                    <label>Upload an image</label>

                    <label className="upload-area">
                        <Upload size={30} />
                        <span>
                            {selectedFile
                                ? selectedFile.name
                                : "Click to select an image"}
                        </span>
                        <small>PNG, JPG or JPEG</small>

                        <input
                            type="file"
                            accept="image/png,image/jpeg"
                            hidden
                            onChange={(e) =>
                                setSelectedFile(e.target.files[0] || null)
                            }
                        />
                    </label>

                    <button
                        className="analyze-btn"
                        disabled={!selectedFile}
                    >
                        Begin Analysis <ArrowRight size={18} />
                    </button>
                </div>
            )}

            <div className="investigation-notice">
                <ShieldCheck size={20} />
                <p>
                    Analysis results are assessments, not guarantees.
                    Missing provenance information does not by itself
                    indicate that content is manipulated.
                </p>
            </div>
        </div>
    );
}

export default NewInvestigation;
