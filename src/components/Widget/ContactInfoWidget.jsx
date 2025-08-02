import { Icon } from '@iconify/react';


export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg" >
          <Icon icon="ep:location" />
        </i>
        Mangal Pandey Road, Khalpara, Siliguri, West Bengal - 734005
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>For Appointments:
       +91 98008 96538, +91 98008 96529
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        contact@paramouthospital.in
      </li>
    </ul>
  );
}
