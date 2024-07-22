import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div className="text-center p-3">
        © 2024 Copyright:
        <Link className="text-body" href="#">
          Godson
        </Link>
      </div>
    </footer>
  );
}
