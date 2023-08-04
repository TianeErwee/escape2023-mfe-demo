export interface Set {
  set_num: string;
  name: string;
  year: number;
  theme_id: number;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

export interface SetListResponse {
  count: number;
  next: string;
  previous: string;
  results: Set[];
}

export interface SetListRequest {
  page?: number;
  page_size?: number;
  ordering?: string;
  search?: string;
  theme_id?: number;
  min_year?: number;
  max_year?: number;
  min_parts?: number;
  max_parts?: number;
}
