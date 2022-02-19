import { Component } from '@angular/core';
import { OrgItemConfig, Enabled, PageFitMode } from 'basic-primitives';

class ContactOrgItemConfig extends OrgItemConfig {
  email: string | null = null;
  phone: string | null = null;

  constructor(config: Partial<ContactOrgItemConfig> = {}) {
    super(config);
    Object.assign(this, config);
  }
}

@Component({
  selector: 'app-page-size-organizational-chart',
  templateUrl: './page-size-organizational-chart.component.html',
  styleUrls: ['./sample.css']
})
export class PageSizeOrganizationalChartComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;

  items = [
    new ContactOrgItemConfig({ id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/q.png", itemTitleColor: "#4169e1", phone: "352-206-7599", title: "David Dalton" }),
    new ContactOrgItemConfig({ id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/w.png", itemTitleColor: "#4b0082", phone: "505-791-1689", title: "Jeanna White" }),
    new ContactOrgItemConfig({ id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/e.png", itemTitleColor: "#4b0082", phone: "262-215-7998", title: "James Holt" }),
    new ContactOrgItemConfig({ id: 3, parent: 0, isVisible: true, description: "VP, Server & Tools Marketing and Solutions", email: "thomwill@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/r.png", itemTitleColor: "#4b0082", phone: "904-547-5342", title: "Thomas Williams" }),
    new ContactOrgItemConfig({ id: 4, parent: 1, isVisible: true, description: "VP, Software & Enterprise Management Division", email: "sarakemp@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/g.png", itemTitleColor: "#4b0082", phone: "918-257-4218", title: "Sara Kemp" }),
    new ContactOrgItemConfig({ id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", email: "georduon@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/x.png", itemTitleColor: "#4b0082", phone: "434-406-2189", title: "George Duong" }),
    new ContactOrgItemConfig({ id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", email: "ashlrue@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/n.png", itemTitleColor: "#4b0082", phone: "515-324-4969", title: "Ashley Rue" }),
    new ContactOrgItemConfig({ id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", email: "bonnwede@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/i.png", itemTitleColor: "#4b0082", phone: "412-265-2782", title: "Bonnie Wedel" }),
    new ContactOrgItemConfig({ id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", email: "melihous@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/p.png", itemTitleColor: "#4b0082", phone: "630-887-1188", title: "Melissa Houser" }),
    new ContactOrgItemConfig({ id: 9, parent: 2, isVisible: true, description: "GM, Software Server Solutions Group", email: "abbilaws@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/a.png", itemTitleColor: "#4b0082", phone: "530-322-6413", title: "Abbie Lawson" }),
    new ContactOrgItemConfig({ id: 10, parent: 3, isVisible: true, description: "GM, Connected Systems Division", email: "erneputn@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/s.png", itemTitleColor: "#4b0082", phone: "626-831-0555", title: "Ernest Putnam" }),
    new ContactOrgItemConfig({ id: 11, parent: 3, isVisible: true, description: "CFO, Platforms Products & Services", email: "celecrum@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/h.png", itemTitleColor: "#4b0082", phone: "419-578-6479", title: "Celestina Crum" }),
    new ContactOrgItemConfig({ id: 12, parent: 3, isVisible: true, description: "GM, Pricing", email: "cindturn@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/j.png", itemTitleColor: "#4b0082", phone: "530-934-4295", title: "Cindy Turner" }),
    new ContactOrgItemConfig({ id: 13, parent: 4, isVisible: true, description: "GM, Worldwide Licensing", email: "victsequ@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/k.png", itemTitleColor: "#4b0082", phone: "973-883-9137", title: "Victoria Sequeira" }),
    new ContactOrgItemConfig({ id: 14, parent: 4, isVisible: true, description: "GM, WW Licensing Solutions", email: "normmoor@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/x.png", itemTitleColor: "#4b0082", phone: "334-496-5203", title: "Norma Moore" }),
    new ContactOrgItemConfig({ id: 15, parent: 4, isVisible: true, description: "GM, Marketing and Readiness", email: "carlcard@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/c.png", itemTitleColor: "#4b0082", phone: "775-999-3630", title: "Carlos Cardenas" }),
    new ContactOrgItemConfig({ id: 16, parent: 5, isVisible: true, description: "Sr. VP, Software Core Operating System Division", email: "johngree@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/v.png", itemTitleColor: "#4b0082", phone: "937-475-8106", title: "John Green" }),
    new ContactOrgItemConfig({ id: 17, parent: 5, isVisible: true, description: "VP, Core OS Development", email: "richmora@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/b.png", itemTitleColor: "#4b0082", phone: "650-729-6483", title: "Richard Morales" }),
    new ContactOrgItemConfig({ id: 18, parent: 5, isVisible: true, description: "VP, Software Networking & Device Technologies", email: "charwhit@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/m.png", itemTitleColor: "#4b0082", phone: "248-402-6142", title: "Charlotte White" }),
    new ContactOrgItemConfig({ id: 19, parent: 6, isVisible: true, description: "VP, Security Technology Unit (STU)", email: "robemorg@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/y.png", itemTitleColor: "#4b0082", phone: "308-532-6548", title: "Robert Morgan" }),
    new ContactOrgItemConfig({ id: 20, parent: 6, isVisible: true, description: "GM, Software Serviceability", email: "idabene@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/a.png", itemTitleColor: "#4b0082", phone: "765-723-1327", title: "Ida Benefield" }),
    new ContactOrgItemConfig({ id: 21, parent: 6, isVisible: true, description: "GM, Core Operating System Test", email: "vadaduho@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/d.png", itemTitleColor: "#4b0082", phone: "303-333-9215", title: "Vada Duhon" }),
    new ContactOrgItemConfig({ id: 22, parent: 7, isVisible: true, description: "GM, Global Platform Technologies and Services", email: "willloyd@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/f.png", itemTitleColor: "#4b0082", phone: "585-309-6253", title: "William Loyd" }),
    new ContactOrgItemConfig({ id: 23, parent: 7, isVisible: true, description: "Sr. VP, NAME & Personal Services Division", email: "craiblue@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/g.png", itemTitleColor: "#4b0082", phone: "915-355-4705", title: "Craig Blue" }),
    new ContactOrgItemConfig({ id: 24, parent: 7, isVisible: true, description: "VP, NAME Communications Services and Member Platform", email: "joelcraw@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/h.png", itemTitleColor: "#4b0082", phone: "650-623-3302", title: "Joel Crawford" }),
    new ContactOrgItemConfig({ id: 25, parent: 8, isVisible: true, description: "VP & CFO, NAME", email: "barblang@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/o.png", itemTitleColor: "#4b0082", phone: "618-822-7345", title: "Barbara Lang" }),
    new ContactOrgItemConfig({ id: 26, parent: 8, isVisible: true, description: "VP, NAME Operations", email: "barbfaul@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/d.png", itemTitleColor: "#4b0082", phone: "641-678-7646", title: "Barbara Faulk" }),
    new ContactOrgItemConfig({ id: 27, parent: 8, isVisible: true, description: "VP, NAME Global Sales & Marketing", email: "stewwill@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/z.png", itemTitleColor: "#4b0082", phone: "803-746-8733", title: "Stewart Williams" }),
    new ContactOrgItemConfig({ id: 28, parent: 9, isVisible: true, description: "Sr. VP, NAME Information Services & Merchant Platform", email: "robelemi@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/y.png", itemTitleColor: "#4b0082", phone: "425-590-4308", title: "Robert Lemieux" }),
    new ContactOrgItemConfig({ id: 29, parent: 9, isVisible: true, description: "Chief of Staff, NAME", email: "danirich@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/o.png", itemTitleColor: "#4b0082", phone: "605-295-4417", title: "Daniel Richmond" }),
    new ContactOrgItemConfig({ id: 30, parent: 9, isVisible: true, description: "VP, Developer & Platform Fanatism", email: "allewall@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/p.png", itemTitleColor: "#4b0082", phone: "480-472-4961", title: "Allen Wallace" }),
    new ContactOrgItemConfig({ id: 31, parent: 10, isVisible: true, description: "VP, .ORG Business Development", email: "benrobe@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/a.png", itemTitleColor: "#4b0082", phone: "636-827-5128", title: "Ben Roberson" }),
    new ContactOrgItemConfig({ id: 32, parent: 10, isVisible: true, description: "GM, .ORG Platform Strategy", email: "mattcole@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/d.png", itemTitleColor: "#4b0082", phone: "408-978-8597", title: "Matthew Cole" }),
    new ContactOrgItemConfig({ id: 33, parent: 10, isVisible: true, description: "GM, Global ISVs", email: "janemart@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/f.png", itemTitleColor: "#4b0082", phone: "801-897-6086", title: "Janet Martin" }),
    new ContactOrgItemConfig({ id: 34, parent: 11, isVisible: true, description: "GM, Platform Fanatism", email: "terecart@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/h.png", itemTitleColor: "#4b0082", phone: "770-326-1639", title: "Teresa Carter" }),
    new ContactOrgItemConfig({ id: 35, parent: 11, isVisible: true, description: "Sr. VP, Software Client Business", email: "sallbarn@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/j.png", itemTitleColor: "#4b0082", phone: "319-656-8043", title: "Sally Barnes" }),
    new ContactOrgItemConfig({ id: 36, parent: 11, isVisible: true, description: "VP, Digital Media Division", email: "elmopete@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/k.png", itemTitleColor: "#4b0082", phone: "423-307-1301", title: "Elmo Peterson" }),
    new ContactOrgItemConfig({ id: 37, parent: 12, isVisible: true, description: "VP, Software Client Core Platform Team", email: "marinels@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/b.png", itemTitleColor: "#4b0082", phone: "410-325-4416", title: "Maria Nelson" }),
    new ContactOrgItemConfig({ id: 38, parent: 12, isVisible: true, description: "VP, Software Online", email: "donnpott@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/w.png", itemTitleColor: "#4b0082", phone: "856-366-8761", title: "Donna Potts" }),
    new ContactOrgItemConfig({ id: 39, parent: 12, isVisible: true, description: "VP, Software Product Management & Marketing", email: "nicklamb@name.com", groupTitleColor: "#4169e1", image: "/assets/photos/r.png", itemTitleColor: "#4b0082", phone: "425-988-7714", title: "Nick Lambert" })
  ];
}
