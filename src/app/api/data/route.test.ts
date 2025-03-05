import { GET } from "./route";
import { vi, expect, it, describe } from "vitest";

vi.mock("@supabase/supabase-js", () => {
  return {
    createClient: vi.fn().mockReturnValue({
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockResolvedValue({
          data: [
            {
              id: 1,
              name: "The Sanctuary Bristol",
              purpose:
                "A safe space offering mental health support for individuals experiencing distress, loneliness, or emotional struggles.",
              city: "Bristol",
              link: "https://www.second-step.co.uk/our-services/community-and-wellbeing/the-sanctuary-bristol/",
              type: "Health and Wellbeing",
            },
            {
              id: 2,
              name: "Stepladder",
              purpose:
                "A mens mental health project focused on helping men in Somerset connect with local community groups and reduce isolation, with an emphasis on early suicide prevention.",
              city: "Somerset",
              link: "https://www.second-step.co.uk/our-services/community-and-wellbeing/open-mental-health/stepladder/",
              type: "Health and Wellbeing",
            },
            {
              id: 3,
              name: "Young Womens Trust - Work It Out Coaching",
              purpose:
                "Offers free coaching for women aged 18 to 30, helping with confidence, job applications, and career planning.",
              city: "UK-wide, including London",
              link: "https://www.youngwomenstrust.org/get-support/coaching/",
              type: "Development and Knowledge",
            },
            {
              id: 4,
              name: "Social Wellness Club",
              purpose:
                "A wellness community in London with a mission to normalise healthier living and help individuals feel their best.",
              city: "London",
              link: "https://www.socialwellnessclub.co.uk/",
              type: "Self-Awareness and Mindset",
            },
            {
              id: 5,
              name: "Life-Changing Events & Seminars in London and the UK",
              purpose:
                "A Meetup group offering free and low-cost personal development seminars covering business, wellness, meditation, leadership, and spirituality.",
              city: "London, UK",
              link: "https://www.meetup.com/life-changing-events-and-seminars-london-free/",
              type: "Skill Development and Knowledge",
            },
            {
              id: 6,
              name: "The Angelou Centre – Wellbeing & Inclusion",
              purpose:
                "Provides wellbeing, social, and creative activities as a core component of their holistic model of care and support, aiming to empower women and children who are often socially and politically excluded.",
              city: "London",
              link: "https://angelou-centre.org.uk/services/wellbeing-inclusion/",
              type: "Health and Wellbeing",
            },
            {
              id: 7,
              name: "Gathering of Good People - Community",
              purpose:
                "A personal growth and self-care community offering support groups focused on emotional well-being, motivation, and accountability.",
              city: "Online",
              link: "https://gatheringofgoodpeople.com/community/",
              type: "Emotional Intelligence and Relationships",
            },
            {
              id: 8,
              name: "Bristol School of Shiatsu - Personal Development",
              purpose:
                "Offers Shiatsu training as a pathway for personal transformation, self-awareness, and healing.",
              city: "Bristol",
              link: "https://bristolschoolofshiatsu.co.uk/about-our-school/personal-development",
              type: "Health and Wellbeing",
            },
            {
              id: 9,
              name: "Bristol Legacy (Common Purpose)",
              purpose:
                "A free leadership and personal development programme for young people, focusing on diversity, purpose, and intergenerational leadership.",
              city: "Bristol",
              link: "https://commonpurpose.org/legacy/bristol-legacy",
              type: "Purpose and Goal Setting",
            },
            {
              id: 10,
              name: "Phoenix Thrive CIC",
              purpose:
                "A nurturing support service for young women, offering personal development and wellbeing opportunities during transitional phases.",
              city: "West Midlands",
              link: "https://www.phoenixthrive.co.uk/",
              type: "Purpose and Goal Setting",
            },
            {
              id: 11,
              name: "Phase Trust",
              purpose:
                "Provides tailored personal development programs for children and young people, helping them explore their identity and aspirations.",
              city: "West Midlands",
              link: "https://phasetrust.org.uk/",
              type: "Emotional Intelligence",
            },
            {
              id: 12,
              name: "Midlands Wellbeing Foundation",
              purpose:
                "Focuses on engagement with the natural environment, skill development, health, and wellbeing through various activities.",
              city: "Birmingham",
              link: "https://www.midlandswf.org.uk/",
              type: "Skill Development and Knowledge",
            },
            {
              id: 13,
              name: "Emotional Intelligence Coaching",
              purpose:
                "Provides coaching based on Emotional Intelligence (EQ) to enhance personal and professional performance, career potential, and well-being.",
              city: "London",
              link: "https://www.eqworks.co.uk/emotional-intelligence-coaching/",
              type: "Emotional Intelligence",
            },
            {
              id: 14,
              name: "Centre for Emotional Health",
              purpose:
                "A community providing resources, training, and support to help individuals and professionals improve emotional wellbeing, resilience, and mental health.",
              city: "Nationwide",
              link: "https://www.centreforemotionalhealth.org.uk/more-information/for-all/",
              type: "Emotional Intelligence",
            },
          ],
          error: null,
        }),
      }),
    }),
  };
});

describe("GET handler", () => {
  it("should return data when Supabase query succeeds", async () => {
    const response = await GET();

    expect(response.status).toBe(200);
    const result = await response.json();
    expect(result).toEqual([
      {
        id: 1,
        name: "The Sanctuary Bristol",
        purpose:
          "A safe space offering mental health support for individuals experiencing distress, loneliness, or emotional struggles.",
        city: "Bristol",
        link: "https://www.second-step.co.uk/our-services/community-and-wellbeing/the-sanctuary-bristol/",
        type: "Health and Wellbeing",
      },
      {
        id: 2,
        name: "Stepladder",
        purpose:
          "A mens mental health project focused on helping men in Somerset connect with local community groups and reduce isolation, with an emphasis on early suicide prevention.",
        city: "Somerset",
        link: "https://www.second-step.co.uk/our-services/community-and-wellbeing/open-mental-health/stepladder/",
        type: "Health and Wellbeing",
      },
      {
        id: 3,
        name: "Young Womens Trust - Work It Out Coaching",
        purpose:
          "Offers free coaching for women aged 18 to 30, helping with confidence, job applications, and career planning.",
        city: "UK-wide, including London",
        link: "https://www.youngwomenstrust.org/get-support/coaching/",
        type: "Development and Knowledge",
      },
      {
        id: 4,
        name: "Social Wellness Club",
        purpose:
          "A wellness community in London with a mission to normalise healthier living and help individuals feel their best.",
        city: "London",
        link: "https://www.socialwellnessclub.co.uk/",
        type: "Self-Awareness and Mindset",
      },
      {
        id: 5,
        name: "Life-Changing Events & Seminars in London and the UK",
        purpose:
          "A Meetup group offering free and low-cost personal development seminars covering business, wellness, meditation, leadership, and spirituality.",
        city: "London, UK",
        link: "https://www.meetup.com/life-changing-events-and-seminars-london-free/",
        type: "Skill Development and Knowledge",
      },
      {
        id: 6,
        name: "The Angelou Centre – Wellbeing & Inclusion",
        purpose:
          "Provides wellbeing, social, and creative activities as a core component of their holistic model of care and support, aiming to empower women and children who are often socially and politically excluded.",
        city: "London",
        link: "https://angelou-centre.org.uk/services/wellbeing-inclusion/",
        type: "Health and Wellbeing",
      },
      {
        id: 7,
        name: "Gathering of Good People - Community",
        purpose:
          "A personal growth and self-care community offering support groups focused on emotional well-being, motivation, and accountability.",
        city: "Online",
        link: "https://gatheringofgoodpeople.com/community/",
        type: "Emotional Intelligence and Relationships",
      },
      {
        id: 8,
        name: "Bristol School of Shiatsu - Personal Development",
        purpose:
          "Offers Shiatsu training as a pathway for personal transformation, self-awareness, and healing.",
        city: "Bristol",
        link: "https://bristolschoolofshiatsu.co.uk/about-our-school/personal-development",
        type: "Health and Wellbeing",
      },
      {
        id: 9,
        name: "Bristol Legacy (Common Purpose)",
        purpose:
          "A free leadership and personal development programme for young people, focusing on diversity, purpose, and intergenerational leadership.",
        city: "Bristol",
        link: "https://commonpurpose.org/legacy/bristol-legacy",
        type: "Purpose and Goal Setting",
      },
      {
        id: 10,
        name: "Phoenix Thrive CIC",
        purpose:
          "A nurturing support service for young women, offering personal development and wellbeing opportunities during transitional phases.",
        city: "West Midlands",
        link: "https://www.phoenixthrive.co.uk/",
        type: "Purpose and Goal Setting",
      },
      {
        id: 11,
        name: "Phase Trust",
        purpose:
          "Provides tailored personal development programs for children and young people, helping them explore their identity and aspirations.",
        city: "West Midlands",
        link: "https://phasetrust.org.uk/",
        type: "Emotional Intelligence",
      },
      {
        id: 12,
        name: "Midlands Wellbeing Foundation",
        purpose:
          "Focuses on engagement with the natural environment, skill development, health, and wellbeing through various activities.",
        city: "Birmingham",
        link: "https://www.midlandswf.org.uk/",
        type: "Skill Development and Knowledge",
      },
      {
        id: 13,
        name: "Emotional Intelligence Coaching",
        purpose:
          "Provides coaching based on Emotional Intelligence (EQ) to enhance personal and professional performance, career potential, and well-being.",
        city: "London",
        link: "https://www.eqworks.co.uk/emotional-intelligence-coaching/",
        type: "Emotional Intelligence",
      },
      {
        id: 14,
        name: "Centre for Emotional Health",
        purpose:
          "A community providing resources, training, and support to help individuals and professionals improve emotional wellbeing, resilience, and mental health.",
        city: "Nationwide",
        link: "https://www.centreforemotionalhealth.org.uk/more-information/for-all/",
        type: "Emotional Intelligence",
      },
    ]);
  });
});
