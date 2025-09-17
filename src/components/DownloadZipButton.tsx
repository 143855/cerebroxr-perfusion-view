import React from "react";
import JSZip from "jszip";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

async function fetchAsArrayBuffer(url: string): Promise<ArrayBuffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch asset: ${url}`);
  return await res.arrayBuffer();
}

const DownloadZipButton: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);
      const zip = new JSZip();

      // Collect text/code files using Vite's glob import (as raw strings)
      const textModules: Record<string, unknown> = {
        ...import.meta.glob("/index.html", { as: "raw", eager: true }),
        ...import.meta.glob("/README.md", { as: "raw", eager: true }),
        ...import.meta.glob("/SETUP_GUIDE.md", { as: "raw", eager: true }),
        ...import.meta.glob("/eslint.config.js", { as: "raw", eager: true }),
        ...import.meta.glob("/tailwind.config.ts", { as: "raw", eager: true }),
        ...import.meta.glob("/vite.config.ts", { as: "raw", eager: true }),
        ...import.meta.glob("/tsconfig*.json", { as: "raw", eager: true }),
        ...import.meta.glob("/public/robots.txt", { as: "raw", eager: true }),
        ...import.meta.glob("/src/**/*.{ts,tsx,css}", { as: "raw", eager: true }),
      };

      for (const [path, mod] of Object.entries(textModules)) {
        const content = mod as string;
        const normalized = path.startsWith("/") ? path.slice(1) : path;
        zip.file(normalized, content);
      }

      // Collect asset files (images) via URLs and add as binary
      const assetModules: Record<string, any> = {
        ...import.meta.glob("/src/assets/**/*", { eager: true }),
        // You can add more binary globs if needed
      };

      const assetPromises = Object.entries(assetModules).map(async ([path, mod]) => {
        const url: string = (mod && (mod.default as string)) || (mod as string);
        const normalized = path.startsWith("/") ? path.slice(1) : path;
        const buf = await fetchAsArrayBuffer(url);
        zip.file(normalized, buf);
      });

      await Promise.all(assetPromises);

      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "cerebroxr-frontend.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      alert("Failed to prepare ZIP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleDownload} disabled={loading} variant="secondary" size="sm">
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Preparing...
        </span>
      ) : (
        <span className="inline-flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download ZIP
        </span>
      )}
    </Button>
  );
};

export default DownloadZipButton;
