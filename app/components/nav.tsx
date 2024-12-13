import Image from "next/image";
import "../styles/nav.scss";

const Nav = () => {
  return (
    <>
      <nav className="fixed inset-x-0 pt-3" style={{ zIndex: "100" }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between -mx-4">
            <div className="lg:w-1/3 w-1/9 px-4 flex items-center">
              <div
                className="flex items-center p-1"
                style={{
                  borderRadius: "40px",
                  backgroundColor: "var(--accent-secondary)",
                }}
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{ width: 75, height: 75 }}
                >
                  <Image
                    src="/assets/logo-bg.png"
                    alt="Logo"
                    width={75}
                    height={75}
                    className="absolute logo-bg"
                    style={{
                      top: "0%",
                      left: "0%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                  <Image
                    src="/assets/logo-bird.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="relative"
                  />
                </div>
                <div style={{ paddingLeft: 15, paddingRight: 10 }}>
                  <span
                    className="text-accent d-block text-shadow"
                    style={{ fontSize: "1.5rem", margin: 0, lineHeight: 1 }}
                  >
                    Latino Web Studio
                  </span>
                  <p
                    className="text-white d-block"
                    style={{ margin: 0, fontSize: "70%", lineHeight: 1 }}
                  >
                    <em>Driving Innovation, Scaling Solutions</em>
                  </p>
                </div>
              </div>
            </div>
            {/* end of column */}
            <div className="lg:w-1/3 w-1/3 px-4 flex justify-end">
              <a
                href="#schedule"
                className="p-1 flex items-center btn-main justify-center"
                style={{
                  height: 83,
                  width: 200,
                  borderRadius: 45,
                  //   backgroundColor: "var(--accent-tertiary);",
                }}
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
