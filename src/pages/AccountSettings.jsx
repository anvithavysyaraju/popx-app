export default function AccountSettings({ userData }) {
  const name = userData?.name || "Marry Doe";
  const email = userData?.email || "Marry@Gmail.Com";

  return (
    <div className="phone-frame">
      <div className="settings-header">
        <h2>Account Settings</h2>
      </div>
      <div className="settings-body">
        <div className="profile-row">
          <div className="avatar-wrap">
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="Profile"
            />
            <div className="avatar-edit">📷</div>
          </div>
          <div>
            <div className="profile-name">{name}</div>
            <div className="profile-email">{email}</div>
          </div>
        </div>

        <p className="settings-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>

        <hr className="settings-divider" />
        <hr className="settings-divider" />
      </div>
    </div>
  );
}
