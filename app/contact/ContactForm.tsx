"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useEffect, useState, Suspense } from "react";
import { toast } from "sonner";

const labelWithRequiredStar = ({ label }: { label: string }) => {
  return (
    <Label htmlFor={label.toLowerCase()}>
      <span className="flex">
        <span>{label}</span>
        <span className="text-red-500">*</span>
      </span>
    </Label>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  return (
    <form className="space-y-6">
      <div className="space-y-4">
        {labelWithRequiredStar({ label: "Name" })}
        <div className="space-y-1">
          <Input
            type="text"
            required
            id="name"
            placeholder="Your name, your fame"
            className="px-2 py-6"
            name="fullname"
            value={formData.fullname}
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
          />
            <span className="text-sm text-red-500">Testing</span>
        </div>
      </div>
      <div className="space-y-4">
        {labelWithRequiredStar({ label: "Email" })}
        <div className="flex flex-col space-y-1">
          <Input
            type="email"
            required
            id="email"
            placeholder="Where can I reach you back?"
            className="px-2 py-6"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <span className="text-sm text-muted-foreground">
            Temporary emails are also accepted, unless you wish to hear back 😉
          </span>
        </div>
      </div>
      <div className="space-y-4">
        {labelWithRequiredStar({ label: "Message" })}
        <div className="space-y-1">
          <Textarea
            required
            id="message"
            placeholder="Your words, my inbox."
            className="px-2 py-4"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
      </div>

      <div className="space-y-4">
        <Button
          type="submit"
          className="w-full px-8 py-6 cursor-pointer"
          size="lg"
          variant="default"
        >
          "Submit"
        </Button>

        <Button
          type="reset"
          className="w-full px-8 py-6 cursor-pointer"
          size="lg"
          variant="outline"
          onClick={() =>
            setFormData({
              fullname: "",
              email: "",
              message: "",
            })
          }
        >
          Reset
        </Button>
      </div>
    </form>
  );
};
export default ContactForm;
