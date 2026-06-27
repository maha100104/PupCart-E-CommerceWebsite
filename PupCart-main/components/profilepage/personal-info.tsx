"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { auth, storage } from "@/lib/firebase";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function PersonalInfo() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [previewUrl, setPreviewUrl] = useState(user?.photoURL || "");
  const [file, setFile] = useState<File | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
    }
  };

  const handleSave = async () => {
    setIsUpdating(true);
    try {
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

      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
        variant: "success",
      });
    } catch (err: any) {
      console.error("Profile update failed:", err);
      toast({
        title: "Update Failed",
        description: err.message || "An error occurred while updating your profile.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
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
        <Image src={previewUrl} alt="preview" width={80} height={80} className="rounded-full mb-4 animate-in fade-in zoom-in-95 duration-200" />
      )}
      <Button onClick={handleSave} disabled={isUpdating}>
        {isUpdating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          "Save"
        )}
      </Button>
    </div>
  );
}
