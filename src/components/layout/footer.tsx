export function Footer() {
    return (
      <footer className="bg-secondary">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mujjar Mita Mandal. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  