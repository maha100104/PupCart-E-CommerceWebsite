"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { auth, storage } from "@/lib/firebase";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from "next/image";

export default function PersonalInfo() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [previewUrl, setPreviewUrl] = useState(user?.photoURL || "");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
    }
  };

  const handleSave = async () => {
    let photoURL = user?.photoURL;

    if (file) {
      const imageRef = ref(storage, `profile-pics/${user?.uid}`);
      await uploadBytes(imageRef, file);
      photoURL = await getDownloadURL(imageRef);
    }

    await updateProfile(auth.currentUser!, {
      displayName: name,
      photoURL,
    });

    alert("✅ Profile updated");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <label>Email</label>
      <Input value={user?.email || ""} disabled className="mb-4" />
      <label>Name</label>
      <Input value={name} onChange={(e) => setName(e.target.value)} className="mb-4" />
      <label>Profile Picture</label>
      <Input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
      {previewUrl && (
        <Image src={previewUrl} alt="preview" width={80} height={80} className="rounded-full mb-4" />
      )}
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
}
